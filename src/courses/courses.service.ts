import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
   constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
   ) {}
    findAll() {
        return this.courseRepository.find();
    }

    findOne(id: string) {
        const course = this.courseRepository.findOne(id);

        if (!course) {
            throw new NotFoundException(
                `Course ID ${id} not found`, 
            );
        }

        return course;
    }

    create(createCourseDto: CreateCourseDto) {
        const course = this.courseRepository.create(createCourseDto);
        return this.courseRepository.save(course);
    }

    async update(id: string, updateCouseDto: UpdateCourseDto) {
        const course = await this.courseRepository.preload({
            id: +id,
            ...updateCouseDto,
        });

        if (!course) {
            throw new NotFoundException( `Course ID ${id} not found` );
        }

        return this.courseRepository.save(course);
    }

    async remove(id: string) {
        const course = await this.courseRepository.findOne(id);

        if (!course) {
            throw new NotFoundException( `Course ID ${id} not found` );
        }

        return this.courseRepository.remove(course);
    }
}
