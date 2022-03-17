import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/entities/base-entity';
import { planet } from '../planet/planet.entity';
@Entity('moon')
export class moon extends BaseEntity {
  @ManyToOne(() => planet, (planet) => planet.moons)
  planetName: planet;
  @Column({ type: 'double precision' })
  distanceFromPlanet: number;
}
