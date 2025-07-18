import { Test, TestingModule } from '@nestjs/testing';
import { TaxiController } from './taxi.controller';
import { TaxiService } from './taxi.service';

describe('AppController', () => {
  let taxiController: TaxiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TaxiController],
      providers: [TaxiService],
    }).compile();

    taxiController = app.get<TaxiController>(TaxiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(taxiController.requestRide('n')).toBe('Hello World!');
    });
  });
});
