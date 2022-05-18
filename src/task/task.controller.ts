import { Controller, Get, Post, Body, Param, Delete, Put, Res, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('api/v1/tasks')
@ApiTags('Tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ 
    summary: 'Adicionar uma nova tarefa' 
  })
  @ApiResponse({
    status: 201,
    description: 'Tarefa criada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
  })
  async create(@Res() response, @Body() createTaskDto: CreateTaskDto) {
    const newTask = await this.taskService.createTask(createTaskDto);
    return response.status(HttpStatus.CREATED).json({
      message: 'tarefa criada com sucesso', newTask
    });
  }

  @Get()
  @ApiOperation({ 
    summary: 'Listar todas as tarefas' 
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de tarefas retornada com sucesso',
  })
  async findAll(@Res() response) {
    const tasks = await this.taskService.findAllTasks();
    return response.status(HttpStatus.OK).json({
      message: 'Tarefas encontradas com sucesso.', tasks
    });
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Exibir os dados de uma tarefa' 
  })
  @ApiResponse({
    status: 200,
    description: 'Dados de uma tarefa retornado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Tarefa não foi encontrada',
  })
  async findOne(@Res() response, @Param('id') id: string) {
    const existingTask = await this.taskService.findTaskById(id);
    return response.status(HttpStatus.OK).json({
      message: 'Tarefa encontrada com sucesso.', existingTask
    });
  }

  @Put(':id')
  @ApiOperation({ 
    summary: 'Atualizar os dados de uma tarefa' 
  })
  @ApiResponse({
    status: 200,
    description: 'Tarefa atualizada com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Tarefa não foi encontrada',
  })
  async update(@Res() response, @Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const updatedTask = await this.taskService.updateTask(id, updateTaskDto);
    return response.status(HttpStatus.OK).json({
      message: 'Tarefa foi atualizada com sucesso.', updatedTask
    });
  }

  @Delete(':id')
  @ApiOperation({ 
    summary: 'Remover uma tarefa' 
  })
  @ApiResponse({ 
    status: 204, description: 'Tarefa removida com sucesso' 
  })
  @ApiResponse({
    status: 404,
    description: 'Tarefa não foi encontrada',
  })
  async remove(@Res() response, @Param('id') id: string) {
    const deletedTask = await this.taskService.removeTask(id);
    return response.status(HttpStatus.NO_CONTENT).json({
      deletedTask
    });
  }
}
