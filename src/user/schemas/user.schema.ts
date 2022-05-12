import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import {Document } from "mongoose"

@Schema()
export class User extends Document {

    @Prop()
    @ApiProperty()
    name: string

    @Prop()
    @ApiProperty()
    cpf: string

    @Prop()
    @ApiProperty()
    birthDate: Date

    @Prop()
    @ApiProperty()
    email: string

    @Prop()
    @ApiProperty()
    password: string

    @Prop()
    @ApiProperty()
    address: string

    @Prop()
    @ApiProperty()
    number: string

    @Prop()
    @ApiProperty()
    complement: string

    @Prop()
    @ApiProperty()
    city: string

    @Prop()
    @ApiProperty()
    state: string

    @Prop()
    @ApiProperty()
    country: string

    @Prop()
    @ApiProperty()
    zipCode: number
}

export const UserSchema = SchemaFactory.createForClass(User);
