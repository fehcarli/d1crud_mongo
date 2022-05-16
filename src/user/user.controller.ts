import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/v1/users')
@ApiTags('Users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Post()
  @ApiOperation({ 
    summary: 'Adicionar uma novo usuário' 
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Listar todos os usuários' 
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários retornada com sucesso',
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Exibir os dados de um usuário' 
  })
  @ApiResponse({
    status: 200,
    description: 'Dados de um usuário retornado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não foi encontrada',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Put(':id')
  @ApiOperation({ 
    summary: 'Atualizar os dados de um usuário' 
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário atualizado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não foi encontrado',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ 
    summary: 'Remover um usuário' 
  })
  @ApiResponse({ 
    status: 204, description: 'Usuário removido com sucesso' 
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não foi encontrada',
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
