import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { Event, EventSchema } from 'src/models/event.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Event, schema: EventSchema }])],
  providers: [EventService],
  controllers: [EventController],
  exports: [EventService],
})
export class EventModule {}
