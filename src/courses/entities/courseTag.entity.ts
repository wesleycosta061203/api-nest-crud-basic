import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuid} from 'uuid';

@Entity('courseTag') 
export class CourseTag {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    @DeleteDateColumn()
    delete_at: Date;
}