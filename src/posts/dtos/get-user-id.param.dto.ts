import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class GetUserIdParamDto {
  @IsNotEmpty()
  @Type(() => Number)
  userId: number;
}
