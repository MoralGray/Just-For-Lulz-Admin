import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from './../../users/entities/user.entity';

export enum UserStatusEnum {
  BANNED = 'banned',
  UNBANNED = 'unbanned',
}

export enum UserRoleEnum {
  MEMBER = 'member',
  GUEST = 'guest',
}

export enum UserAdminRoleEnum {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
}

@Entity('user-status')
export class UserStatus extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ nullable: true })
  userId: number;

  @Column({
    type: 'enum',
    enum: UserStatusEnum,
    nullable: true,
  })
  status: UserStatusEnum;

  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    nullable: true,
  })
  userRole: UserRoleEnum;

  @Column({
    type: 'enum',
    nullable: true,
    enum: UserAdminRoleEnum,
  })
  userAdminRole: UserAdminRoleEnum;
}
