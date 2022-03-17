import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { planet } from './entities/planet/planet.entity';
import { moon } from './entities/moon/moon.entity';

// * request to your domain-.com/everything
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // *get  request to your domain-.com/
  @Get()
  async fetchAllPlanetsWithTheirMoons() {
    return this.appService.getAllPlanetsWithTheirMoons();
  }
}
