import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './course.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  details: string;

  @ManyToMany(() => Course, (course) => course.tags)
  course: Course[];
}
