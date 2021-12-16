import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Course } from './course.entity';

import {v4 as uuid} from 'uuid';
@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  details: string;

  @ManyToMany(() => Course, (course) => course.tags)
  course: Course[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  delete_at: Date;

  @BeforeInsert()
  generatedId(){
    if (this.id) {
      return;
    }

    this.id = uuid();
  }
}
