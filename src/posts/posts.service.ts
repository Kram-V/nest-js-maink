import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  public findAll() {
    return 'ALL POSTS';
  }

  public findAllByUserId(userId: number) {
    const user = this.usersService.findOneById(userId);

    return `USER ID ${userId}`;
  }
}
