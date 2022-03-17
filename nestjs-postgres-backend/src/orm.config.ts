import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: '/* your username */',
  password: '/* your password */!',
  port: 5432,
  host: 'localhost',
  database: ' /*your database name */',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
