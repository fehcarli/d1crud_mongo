import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './schemas/task.schema';

@Injectable()
export class TaskService {

  constructor(
    @InjectModel('Task')
    private readonly taskModel: Model<Task>
  ){}

  async create(createTaskDto: CreateTaskDto) {
    const createTask = await this.taskModel.create(createTaskDto);
    return createTask.save();
  }

  async findAll() {
    return await this.taskModel.find().exec();
  }

  async findById(id: string): Promise<Task> {
    const task = await this.taskModel.findById(id).exec();
    if(!task){
      throw new NotFoundException('Esta tarefa não existe');
    }
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.taskModel.findById(id).exec();
    if(!task){
      throw new NotFoundException('Esta tarefa não existe');
    }
    return await task.updateOne(updateTaskDto).exec();
  }

  async remove(id: string) {
    const deleteTask = await this.taskModel.findByIdAndDelete({_id: id}).exec();
    return deleteTask.remove();
  }
}
