import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserID } from 'src/decorators/user.decorator';
import { ResponseService } from './response.service';

@Controller('response')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Get('')
  getAll() {
    return this.responseService.getAll();
  }

  @Post(':eventID')
  async createResponse(
    @UserID() userID: string,
    @Param('eventID') eventID: string,
  ) {
    return this.responseService.createResponse(userID, eventID);
  }

  @Get(':eventID/export')
  async export(@Param('eventID') eventID: string) {
    return this.responseService.getResponseByEventID(eventID);
  }
}
