import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PostType } from './enums/post-type.enum';
import { Status } from './enums/status.enum';
import { MetaOptionDto } from './dtos/meta-option.dto';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    default: PostType.POST,
  })
  postType: PostType;

  @Column({
    unique: true,
  })
  slug: string;

  @Column()
  status: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.DRAFT,
    nullable: true,
  })
  content?: Status;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  schema?: string;

  @Column({
    nullable: true,
  })
  featuredImgUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishedAt?: Date;

  @Column({
    nullable: true,
  })
  tags?: string[];

  @Column({
    nullable: true,
  })
  metaOptions?: MetaOptionDto[];
}
