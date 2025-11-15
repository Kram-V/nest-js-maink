import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GetUsersQueryDto } from './dtos/get-users.query.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Getting all users',
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully',
  })
  @Get('/')
  public getUsers(@Query() getUsersQueryDto?: GetUsersQueryDto) {
    return this.usersService.findAll(getUsersQueryDto);
  }

  @ApiOperation({
    summary: 'Getting specific user',
  })
  @Get('/:id')
  public getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOneById(id);
  }

  @ApiOperation({
    summary: 'Create user',
  })
  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({
    summary: 'Update user',
  })
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
  }
}
