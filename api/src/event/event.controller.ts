import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateEventDTO } from './event.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('search')
  search(@Query('key') key: string) {
    return this.eventService.searchByEventTitle(key);
  }

  @Get(':id')
  getEvent(@Param('id') id: string) {
    return this.eventService.getEvent(id);
  }

  @Post()
  createEvent(@Body() event: CreateEventDTO) {
    return this.eventService.createEvent(event);
  }

  @Get()
  getAll() {
    return this.eventService.getAll();
  }
}
