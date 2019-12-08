import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Response, ResponseI } from 'src/models/response.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { EventService } from 'src/event/event.service';

@Injectable()
export class ResponseService {
  constructor(
    @InjectModel(Response) private readonly responseModel: Model<ResponseI>,
    private readonly eventService: EventService,
    private readonly userService: UserService,
  ) {}

  getAll() {
    return this.responseModel.find().exec();
  }

  getByEventID(eventID: string) {
    return this.responseModel.findOne({ eventID }).exec();
  }

  async createResponse(userID: string, eventID: string) {
    const checkEvent = await this.eventService.getEvent(eventID);

    if (!checkEvent) {
      throw new NotFoundException('Not Found');
    }

    let options = {
      new: true,
      upsert: true,
      setDefaultsOnInsert: true,
    };

    let now = new Date().toISOString();

    let user = {
      userID,
      createdAt: now,
      updatedAt: now,
    };

    const response = await this.responseModel
      .findOne({
        eventID: checkEvent._id,
        'users.userID': userID,
      })
      .exec();

    if (!response) {
      await this.responseModel.findOneAndUpdate(
        { eventID },
        { $push: { users: user } },
        options,
      );
    }

    await this.userService.addEvent(userID, checkEvent._id);
    return { status: 0 };
  }
}
