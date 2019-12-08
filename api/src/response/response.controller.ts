import { Controller, Post, Param, Get } from '@nestjs/common';
import { ResponseService } from './response.service';
import { UserID } from 'src/decorators/user.decorator';

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
}
