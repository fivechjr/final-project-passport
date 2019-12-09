import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './user.dto';
import { UserID } from 'src/decorators/user.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  getCurrentUser(@UserID() userID: string) {
    return this.userService.getUserByID(userID, true);
  }

  @Get('ping')
  ping(@UserID() userID: string) {
    return userID;
  }

  @Post('')
  createUser(@Body() user: CreateUserDTO) {
    return this.userService.createUser(user);
  }

  @Get('bookmark')
  getBookmarks(@UserID() userID: string) {
    return this.userService.getBookmarks(userID);
  }

  @Post('bookmark/:eventID')
  addBookmark(@UserID() userID: string, @Param('eventID') eventID: string) {
    return this.userService.addBookmark(userID, eventID);
  }

  @Delete('bookmark/:eventID')
  removeBookmark(@UserID() userID: string, @Param('eventID') eventID: string) {
    return this.userService.removeBookmark(userID, eventID);
  }

  @Get('event')
  getEvents(@UserID() userID: string) {
    return this.userService.getUserEvents(userID);
  }
}
