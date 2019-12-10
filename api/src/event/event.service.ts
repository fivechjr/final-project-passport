import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventI } from 'src/models/event.model';

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
    return this.eventModel
      .find()
      .sort({ endDate: -1 })
      .sort({ startDate: 1 })
      .exec();
  }

  // async searchByEventTitle(key: string) {
  //   if (!key) {
  //     return this.getAll();
  //   }

  //   return this.eventModel
  //     .find({
  //       $text: {
  //         $search: new RegExp(key, 'i'),
  //       },
  //     })
  //     .limit(10)
  //     .exec();
  // }

  async searchByEventTitle(key: string) {
    if (!key) {
      return this.getAll();
    }

    return this.eventModel
      .find({
        title: new RegExp(key, 'i'),
      })
      .limit(10)
      .exec();
  }
}
