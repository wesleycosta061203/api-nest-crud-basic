import { Tag } from './entities/tag.entity';
import { Course } from './entities/course.entity';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Course, Tag])],
    controllers: [CoursesController],
    providers: [CoursesService],
})
export class CoursesModule {}
