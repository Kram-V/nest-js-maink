import {
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { GetUsersQueryDto } from './dtos/get-users.query.dto';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  public findAll(getUsersQueryDto?: GetUsersQueryDto) {
    const { limit, page } = getUsersQueryDto ?? {};

    this.authService.isAuth();

    return 'FROM USERS SERVICE';
  }

  public findOneById(id: number) {
    return `ID NUMBER FROM USERS SERVICE: ${id}`;
  }

  public async create(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const newUser = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(newUser);
  }
}
