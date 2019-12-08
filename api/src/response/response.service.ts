import { Injectable } from '@nestjs/common';
import { Response } from 'src/models/response.model';
import { InjectModel } from '@nestjs/mongoose';
import { EventI } from 'src/models/event.model';
import { Model } from 'mongoose';

@Injectable()
export class ResponseService {
  constructor(
    @InjectModel(Response) private readonly eventModel: Model<EventI>,
  ) {}

  getByEventID(eventID: string) {
    return this.eventModel.find({ eventID }).exec();
  }
}
