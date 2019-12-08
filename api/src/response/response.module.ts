import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';

@Module({
  providers: [ResponseService],
  controllers: [ResponseController]
})
export class ResponseModule {}
