import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { ResponseSchema, Response } from 'src/models/response.model';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from 'src/event/event.module';
import { UserModule } from 'src/user/user.module';

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
