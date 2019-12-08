import { Injectable } from '@nestjs/common';
import { Response } from 'src/models/response.model';
import { InjectModel } from '@nestjs/mongoose';
import { EventI } from 'src/models/event.model';
import { Model, mongo } from 'mongoose';

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

  createResponse(eventID: string, userID: string) {
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

    return this.responseModel.findOneAndUpdate(
      { eventID },
      { $push: { users: user } },
      options,
    );
  }
}
