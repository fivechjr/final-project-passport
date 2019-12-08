import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDTO } from './event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  createEvent(@Body() event: CreateEventDTO) {
    return this.eventService.createEvent(event);
  }

  @Get(':id')
  getEvent(@Param('id') id: string) {
    return this.eventService.getEvent(id);
  }

  @Get()
  getAll() {
    return this.eventService.getAll();
  }
}
