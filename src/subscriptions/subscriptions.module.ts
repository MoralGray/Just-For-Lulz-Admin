import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { SubscriptionsController } from 'src/subscriptions/subscriptions.controller';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subscription])],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
})
export class SubscriptionsModule {}
