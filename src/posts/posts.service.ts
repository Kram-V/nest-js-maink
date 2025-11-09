import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreatePostDto } from './dtos/create-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  public findAll() {
    return 'ALL POSTS';
  }

  public findAllByUserId(id: number) {
    const user = this.usersService.findOneById(id);

    return `USER ID ${id}`;
  }

  public create(createPostDto: CreatePostDto) {
    console.log(createPostDto);
  }
}
