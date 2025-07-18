import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('notify')
  async notifyRidePaid(@Body() body: any) {
    return this.paymentsService.notifyRidePaid(body);
  }
}
