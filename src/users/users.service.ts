import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersQueryDto } from './dtos/get-users.query.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public findAll(getUsersQueryDto?: GetUsersQueryDto) {
    const { limit, page } = getUsersQueryDto ?? {};

    this.authService.isAuth();

    return 'FROM USERS SERVICE';
  }

  public findOneById(id: number) {
    return `ID NUMBER FROM USERS SERVICE: ${id}`;
  }
}
