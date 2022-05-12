import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose"
import { User } from "src/user/schemas/user.schema";
@Schema()
export class Task extends Document {

    @Prop()
    @ApiProperty()
    description: string;

    @Prop()
    @ApiProperty()
    date: Date;

    @Prop()
    @ApiProperty()
    user: User;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
