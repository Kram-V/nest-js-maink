import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { IdParamDto } from './dtos/id.param.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  public getPosts() {
    return this.postsService.findAll();
  }

  @Get('/users/:id')
  public getPostsByUserId(@Param() idParamDto: IdParamDto) {
    return this.postsService.findAllByUserId(idParamDto.id);
  }

  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Patch('/:id')
  public updatePost(
    @Body() patchPostDto: PatchPostDto,
    @Param() idParamDto: IdParamDto,
  ) {
    console.log(idParamDto);
  }
}
