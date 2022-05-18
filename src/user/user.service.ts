import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {}

  async getUserByEmail(email: string) {    
    const user = await this.userModel.findOne({ email: email }).exec();
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    let user = await this.getUserByEmail(createUserDto.email);
    if(user){
      throw new ConflictException('Usuário já existe');
    }
    user = await this.userModel.create(createUserDto);
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    if(!users || users.length === 0){
      throw new NotFoundException('Usuários não existem');
    }
    return users;
  }

  async findById(id: string): Promise<User> {    
    const user = await this.userModel.findById(id).exec();
    if(!user){
      throw new NotFoundException('Este usuário não existe');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const existingUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true}).exec();
    if(!existingUser){
      throw new NotFoundException('Este usuário não existe');
    }
    return existingUser;
  }

  async remove(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id)
    if(!deletedUser){
      throw new NotFoundException(`O usuário de id=${id} não existe`);
    }
    return deletedUser;
  }
}
