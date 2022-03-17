import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { planet } from './entities/planet/planet.entity';
import { moon } from './entities/moon/moon.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(planet)
    private planetRepo: Repository<planet>,
    @InjectRepository(moon)
    private moonRepo: Repository<moon>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  getAllPlanets(): Promise<planet[]> {
    return this.planetRepo.find();
  }
  getAllMoons(): Promise<moon[]> {
    return this.moonRepo.find();
  }
  getAllPlanetsWithTheirMoons() {
    return this.planetRepo
      .createQueryBuilder('planet')
      .leftJoinAndSelect('planet.moons', 'moon')
      .getMany();
  }
}
