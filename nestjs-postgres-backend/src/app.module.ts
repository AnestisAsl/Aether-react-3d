import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { planet } from './entities/planet/planet.entity';
import { moon } from './entities/moon/moon.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([planet, moon]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
