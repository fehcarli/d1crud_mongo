import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose"
import { Schema as MongooseSchema} from 'mongoose'
import { User } from "src/user/schemas/user.schema";

@Schema()
export class Task extends Document {

    @Prop({ required: true})
    @ApiProperty()
    description: string;

    @Prop({ required: true })
    @ApiProperty()
    date: Date;

    @Prop({ 
        type: MongooseSchema.Types.ObjectId, 
        required: false, ref: User.name 
    })
    @ApiProperty()
    user: User;

    @Prop({ default: Date.now() })
    createdAt: Date;

    @Prop({ default: Date.now() })
    updatedAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
