import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { File } from 'src/files/entities/file.entity';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  surname: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  before_surname: string;

  @Column({ nullable: true })
  age: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  login: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  country: string;

  @Column({ nullable: true })
  photoId: number;

  @OneToOne(() => File)
  @JoinColumn({ name: 'photoId' })
  photo: File;

  @Column({ nullable: true })
  bgId: number;

  @OneToOne(() => File)
  @JoinColumn({ name: 'bgId' })
  bg: File;

  @Column({ type: 'varchar', length: 255, nullable: true })
  city: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  privacy: string;
}
