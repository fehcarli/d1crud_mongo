import { ApiProperty } from "@nestjs/swagger"
import { Transform, Type } from "class-transformer"
import { 
    IsDate,
    IsEmail,  
    IsNotEmpty, 
    IsNumber, 
    Length, 
    MaxDate,
    MaxLength,
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
    @MaxDate(new Date(2004), {
        message: "O ano de nascimento precisa ser antes de 2004"
    })
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
    @MaxLength(2)
    @ApiProperty()
    state: string

    @IsNotEmpty()
    @ApiProperty()
    country: string

    @IsNotEmpty()
    @IsNumber()
    @MaxLength(8)
    @ApiProperty()
    zipCode: string
}
