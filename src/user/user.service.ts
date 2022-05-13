import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {

  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const createUser = await this.userModel.create(createUserDto);
    return createUser.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    let user;
    user = await this.userModel.findById(id).exec();
    if(!user){
      throw new NotFoundException('Este usuário não existe');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if(!user){
      throw new NotFoundException('Este usuário não existe');
    }
    return await this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  async remove(id: string) {
    const inactiveUser = this.userModel.findByIdAndDelete({
      _id: id
    }).exec();
    return (await inactiveUser).remove();
  }
}
