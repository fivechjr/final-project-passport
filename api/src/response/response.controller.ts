import { Controller, Post, Param, Get } from '@nestjs/common';
import { ResponseService } from './response.service';

@Controller('response')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('')
  getAll() {
    return this.responseService.getAll();
  }

  @Post(':eventID')
  async createResponse(@Param('eventID') eventID: string) {
    return this.responseService.createResponse(eventID, eventID);
  }
}
