import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/entities/base-entity';
import { moon } from '../moon/moon.entity';
@Entity('planet')
export class planet extends BaseEntity {
  @Column()
  color: string;
  @Column({ type: 'double precision' })
  age: number;
  @OneToMany(() => moon, (moon) => moon.planetName)
  moons: moon[];
}
