import { ApiProperty } from "@nestjs/swagger"
import { 
    IsDate, 
    IsEmail,  
    IsInt,  
    IsNotEmpty, 
    Length, 
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
    @IsDate({always: true})
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
    @ApiProperty()
    zipCode: number
}
