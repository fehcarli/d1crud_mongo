import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ MongooseModule.forRoot(
      'mongodb+srv://atlas_user:ZHTixvq3FSIRqtI0@clusteraws.ou49u.mongodb.net/CrudDatabase?retryWrites=true&w=majority'
      ),
    TaskModule, UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
