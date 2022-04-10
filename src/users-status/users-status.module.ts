import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { UsersStatusService } from 'src/users-status/users-status.service';
import { UsersStatusController } from 'src/users-status/users-status.controller';
import { UserStatus } from 'src/users-status/entities/user-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserStatus])],
  controllers: [UsersStatusController],
  providers: [UsersStatusService],
})
export class UsersStatusModule {}
