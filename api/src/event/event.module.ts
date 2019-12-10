import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from 'src/models/event.model';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Event, schema: EventSchema }])],
  providers: [EventService],
  controllers: [EventController],
  exports: [EventService],
})
export class EventModule {}
