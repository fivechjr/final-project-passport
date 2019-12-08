import { Controller, Post, Param } from '@nestjs/common';
import { ResponseService } from './response.service';

@Controller('response')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Post(':eventID')
  createResponse(@Param('eventID') eventID: string) {
    // Check:
    const response = this.responseService.getByEventID(eventID);
    if (response) {
      // Yes
    } else {
      // No
    }
  }
}
