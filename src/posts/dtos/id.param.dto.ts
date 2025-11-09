import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class IdParamDto {
  @IsNotEmpty()
  @Type(() => Number)
  id: number;
}
