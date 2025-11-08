import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(['/', '/:id'])
  public getUsers(@Param('id') id?: string, @Query() query?: any) {
    return id ? `LIST OF USERS WITH ID: ${id}` : 'LIST OF USERS';
  }

  @Post()
  public createUser(@Body() body: any) {
    console.log(body);
  }
}
