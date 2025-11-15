import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'meta_options' })
export class MetaOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'jsonb',
  })
  metaValue: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
