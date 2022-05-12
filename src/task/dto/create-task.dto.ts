import { ApiProperty } from "@nestjs/swagger"
import { 
    IsDate, 
    IsNotEmpty, 
    Length
} from "class-validator"

export class CreateTaskDto {

    @IsNotEmpty()
    @Length(20, 50)
    @ApiProperty()
    description: string;

    @IsNotEmpty()
    @IsDate()
    @ApiProperty()
    date: Date;
}
