import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TaxiService } from './taxi.service';

@Controller()
export class TaxiController {
  constructor(private readonly taxiService: TaxiService) {}

  @MessagePattern('taxi')
  async handleRideRequest(@Payload() data: any) {
    console.log('Taxi Service received request_ride:', data);
    return this.taxiService.addTaxi(data);
  }
}
