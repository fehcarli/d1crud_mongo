import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { 
    IsDate,
    IsEmail,  
    IsNotEmpty, 
    MaxDate, 
    MaxLength,
    MinLength 
} from "class-validator"

export class CreateUserDto {

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    @ApiProperty()
    name: string

    @IsNotEmpty()
    @MaxLength(11, {
        message: "CPF precisa de 11 digitos"
    })
    @ApiProperty()
    cpf: string

    @IsNotEmpty()
    @Type(()=>Date)
    @IsDate()
    @MaxDate(new Date(2004, 1, 1), {
        message: "O ano de nascimento precisa ser antes de 2004"
    })
    @ApiProperty()
    birthDate: Date

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string

    @IsNotEmpty()
    @MinLength( 6, {
        always: true
    })
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
    @MinLength(8, {
        message: "Cep ou Código Postal precisa de 8 digitos"
    })
    @MaxLength(8, {
        message: "Cep ou Código Postal só pode conter 8 digitos no maximo"
    })
    @ApiProperty()
    zipCode: string
}
