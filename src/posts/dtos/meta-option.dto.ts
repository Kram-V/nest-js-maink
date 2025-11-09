import { IsNotEmpty, IsString } from 'class-validator';

export class MetaOptionDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  value: any;
}
