import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ContentPreferences, User } from 'src/decorators/user.decorator';
import { CreateEventDTO } from './event.dto';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('search')
  search(
    @User() userInfo,
    @ContentPreferences() contentPrefs,
    @Query('key') key: string,
  ) {
    return this.eventService.searchByEventTitle(userInfo, contentPrefs, key);
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
  getAll(@User() userInfo, @ContentPreferences() contentPrefs) {
    return this.eventService.getAll(userInfo, contentPrefs);
  }
}
