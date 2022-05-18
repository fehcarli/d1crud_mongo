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

  async createTask(createTaskDto: CreateTaskDto) {
    const task = await this.taskModel.create(createTaskDto);
    return task;
  }

  async findAllTasks() {
    const tasks = await this.taskModel.find().exec();
    if(!tasks || tasks.length === 0){
      throw new NotFoundException('Tarefas não existem')
    }
    return tasks;
  }

  async findTaskById(id: string): Promise<Task> {
    const task = await this.taskModel.findById(id).exec();
    if(!task){
      throw new NotFoundException('Esta tarefa não existe');
    }
    return task;
  }

  async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const existingTask = await this.taskModel.findByIdAndUpdate(id).exec();
    if(!existingTask){
      throw new NotFoundException('Esta tarefa não existe');
    }
    return existingTask;
  }

  async removeTask(id: string) {
    const deletedTask = await this.taskModel.findByIdAndDelete({_id: id}).exec();
    if(!deletedTask){
      throw new NotFoundException(`A tarefa de id=${id} não existe`);
    }
    return deletedTask;
  }
}
