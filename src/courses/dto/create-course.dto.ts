import { IsNotEmpty, IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
   readonly name: string;

   @IsString()
   readonly description: string;

   @IsString( {each: true, message:'tag deve ser texto!'})
   @IsNotEmpty({each: true, message:'informe as tags'})
   readonly tags: string[];
}
