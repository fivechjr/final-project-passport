import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { ResponseSchema, Response } from 'src/models/response.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Response, schema: ResponseSchema }]),
  ],
  providers: [ResponseService],
  controllers: [ResponseController],
})
export class ResponseModule {}
