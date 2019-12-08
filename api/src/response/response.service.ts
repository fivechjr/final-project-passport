import { Injectable, BadRequestException } from '@nestjs/common';
import { Response, ResponseI } from 'src/models/response.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ResponseService {
  constructor(
    @InjectModel(Response) private readonly responseModel: Model<ResponseI>,
  ) {}

  getAll() {
    return this.responseModel.find().exec();
  }

  getByEventID(eventID: string) {
    return this.responseModel.findOne({ eventID }).exec();
  }

  async createResponse(eventID: string, userID: string) {
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
        eventID: eventID,
        'users.userID': userID,
      })
      .exec();

    console.log(response);

    if (!response) {
      await this.responseModel.findOneAndUpdate(
        { eventID },
        { $push: { users: user } },
        options,
      );
      return response;
    } else {
      throw new BadRequestException('User already joined.');
    }
  }
}
