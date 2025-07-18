import { Test, TestingModule } from '@nestjs/testing';
import { RidesController } from './rides.controller';
import { RidesService } from './rides.service';

describe('RidesController', () => {
  let ridesController: RidesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RidesController],
      providers: [RidesService],
    }).compile();

    ridesController = app.get<RidesController>(RidesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ridesController.handleCreateRide('c')).toBe('Hello World!');
    });
  });
});
