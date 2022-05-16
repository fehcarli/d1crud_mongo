import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { 
    IsDate,
    IsEmail,  
    IsInt,  
    IsNotEmpty, 
    Length, 
    MaxDate,
    MinDate,
    MinLength 
} from "class-validator"

export class CreateUserDto {

    @IsNotEmpty()
    @Length(20, 40)
    @ApiProperty()
    name: string

    @IsNotEmpty()
    @Length(11)
    @ApiProperty()
    cpf: string

    @IsNotEmpty()
    @Type(()=>Date)
    @IsDate()
    @MinDate(new Date(1970, 1, 1, 0, 0, 0, 0))
    @MaxDate(new Date(2004, 1, 1, 0, 0, 0, 0))
    @ApiProperty()
    birthDate: Date

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string

    @IsNotEmpty()
    @MinLength( 6, {always: true})
    @ApiProperty()
    password: string

    @IsNotEmpty()
    @ApiProperty()
    address: string

    @IsNotEmpty()
    @ApiProperty()
    number: string

    @IsNotEmpty()
    @ApiProperty()
    complement: string

    @IsNotEmpty()
    @ApiProperty()
    city: string

    @IsNotEmpty()
    @ApiProperty()
    state: string

    @IsNotEmpty()
    @ApiProperty()
    country: string

    @IsNotEmpty()
    @IsInt()
    @Length(8)
    @ApiProperty()
    zipCode: number
}
