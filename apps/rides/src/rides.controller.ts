import { Controller } from '@nestjs/common';
import { RidesService } from './rides.service';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}
  @MessagePattern('create_ride')
  async createRide(data: any) {
    return { success: true };
  }
}
