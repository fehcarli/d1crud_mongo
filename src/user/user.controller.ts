import { Controller, Get, Post, Body, Param, Delete, Put, Res, HttpStatus } from '@nestjs/common';
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
    status: 201,
    description: 'Usuário criado com sucesso',
  })
  @ApiResponse({
    status: 409,
    description: 'Usuário já existe no banco de dados',
  })
  async create(@Res() response, @Body() createUserDto: CreateUserDto) {
    const newUser = await this.userService.create(createUserDto);
    return response.status(HttpStatus.CREATED).json({
      message: 'Usuário foi criado com sucesso.', newUser
    });
  }

  @Get()
  @ApiOperation({ 
    summary: 'Listar todos os usuários' 
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários retornada com sucesso',
  })
  async findAll(@Res() response) {
    const users = await this.userService.findAll();
    return response.status(HttpStatus.OK).json({
      message: 'Usuários encontrados com sucesso.', users
    });
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
    description: 'Usuário não foi encontrado',
  })
  async findOne(@Res() response, @Param('id') id: string) {
    const existingUser = await this.userService.findById(id);
    return response.status(HttpStatus.OK).json({
      message: 'Usuário encontrado com sucesso.', existingUser
    });
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
    status: 404,
    description: 'Usuário não foi encontrado',
  })
  async update(@Res() response, @Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userService.update(id, updateUserDto);
    return response.status(HttpStatus.OK).json({
      message: 'Usuário foi atualizado com sucesso.', updatedUser
    });
  }

  @Delete(':id')
  @ApiOperation({ 
    summary: 'Remover um usuário' 
  })
  @ApiResponse({ 
    status: 204, 
    description: 'Usuário removido com sucesso' 
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não foi encontrado',
  })
  async remove(@Res() response, @Param('id') id: string) {
    const deletedUser = await this.userService.remove(id);
    return response.status(HttpStatus.NO_CONTENT).json({
      deletedUser
    });
  }
}
