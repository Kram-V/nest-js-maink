import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { GetUserIdParamDto } from './dtos/get-user-id.param.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  public getPosts() {
    return this.postsService.findAll();
  }

  @Get('/users/:userId')
  public getPostsByUserId(@Param() getUserIdParamDto: GetUserIdParamDto) {
    return this.postsService.findAllByUserId(getUserIdParamDto.userId);
  }
}
