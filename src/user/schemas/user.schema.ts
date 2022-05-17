import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose"

@Schema()
export class User extends Document {

    @Prop({ required: true })
    @ApiProperty()
    name: string;

    @Prop({ required: true })
    @ApiProperty()
    cpf: string;

    @Prop({ required: true })
    @ApiProperty()
    birthDate: Date;

    @Prop({ required: true })
    @ApiProperty()
    email: string;

    @Prop({ required: true })
    @ApiProperty()
    password: string;

    @Prop({ required: true })
    @ApiProperty()
    address: string;

    @Prop({ required: true })
    @ApiProperty()
    number: string;

    @Prop({ required: true })
    @ApiProperty()
    complement: string;

    @Prop({ required: true })
    @ApiProperty()
    city: string;

    @Prop({ required: true })
    @ApiProperty()
    state: string;

    @Prop({ required: true })
    @ApiProperty()
    country: string;

    @Prop({ required: true })
    @ApiProperty()
    zipCode: string;

    @Prop({ default: Date.now() })
    createdAt: Date;

    @Prop({ default: Date.now() })
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
