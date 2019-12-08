import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Event, EventI } from 'src/models/event.model';
import { Model } from 'mongoose';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private readonly eventModel: Model<EventI>) {}
  async createEvent(event: EventI) {
    const createEvent = new this.eventModel(event);
    return await createEvent.save();
  }
  getEvent(id: string) {
    return this.eventModel.findById(id).exec();
  }
  getAll() {
    return this.eventModel.find().exec();
  }
}
