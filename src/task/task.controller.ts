import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
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
    status: 400,
    description: 'Parâmetros inválidos',
  })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Listar todas as tarefas' 
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de tarefas retornada com sucesso',
  })
  findAll() {
    return this.taskService.findAll();
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
  findOne(@Param('id') id: string) {
    return this.taskService.findById(id);
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
    status: 400,
    description: 'Dados inválidos',
  })
  @ApiResponse({
    status: 404,
    description: 'Tarefa não foi encontrada',
  })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
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
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
