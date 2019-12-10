import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from 'src/event/event.module';
import { Response, ResponseSchema } from 'src/models/response.model';
import { UserModule } from 'src/user/user.module';
import { ResponseController } from './response.controller';
import { ResponseService } from './response.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Response, schema: ResponseSchema }]),
    EventModule,
    UserModule,
  ],
  providers: [ResponseService],
  controllers: [ResponseController],
})
export class ResponseModule {}
