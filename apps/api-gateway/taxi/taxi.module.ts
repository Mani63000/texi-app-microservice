import { Module } from '@nestjs/common';
import { TaxiController } from './taxi.controller';

@Module({
  controllers: [TaxiController],
})
export class TaxiModule {}