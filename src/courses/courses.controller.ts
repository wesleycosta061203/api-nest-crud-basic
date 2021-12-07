import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { CoursesService } from './courses.service';
import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

constructor(private readonly CoursesService: CoursesService) {}

    @Get()
    findAll() {
        return this.CoursesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.CoursesService.findOne(id);
    }

    @Post()
    // @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() CreateCourseDto: CreateCourseDto) {
        return this.CoursesService.create(CreateCourseDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto){
        return this.CoursesService.update(id, updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.CoursesService.remove(id);
    }

}
