import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('page')
export class Page extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  title: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  path: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  keywords: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;
}
