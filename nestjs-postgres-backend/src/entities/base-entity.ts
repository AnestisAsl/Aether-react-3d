import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryColumn()
  name: string;

  @Column({ type: 'double precision' })
  rSpeed: number;

  @Column({ type: 'double precision' })
  oSpeed: number;

  @Column({ type: 'double precision' })
  radius: number;
}
