import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'database',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest',
    autoLoadEntities: true,
    synchronize: false,

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
