import { Controller } from '@nestjs/common';

import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}
}
