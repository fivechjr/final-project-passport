import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventI } from 'src/models/event.model';
import { hasContentPref } from 'src/utils';

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

  createExtraArgs(user: any, contentPrefs: Array<any>) {
    const options: any = {};

    if (hasContentPref(contentPrefs, 'FACULTY_EVENTS')) {
      options.organizer = user.faculty;
    }

    // hasContentPref(contentPrefs, 'ENDED_EVENTS')
    // True: Nothing to do
    // False: Apply filtering
    if (!hasContentPref(contentPrefs, 'ENDED_EVENTS')) {
      options.endDate = { $gt: new Date() };
    }

    return options;
  }

  getAll(user: any, contentPrefs: Array<any>) {
    const options = this.createExtraArgs(user, contentPrefs);
    return this.eventModel
      .find(options)
      .sort({ endDate: -1 })
      .sort({ startDate: 1 })
      .exec();
  }

  async searchByEventTitle(user: any, contentPrefs: Array<any>, key: string) {
    if (!key) {
      return this.getAll(user, contentPrefs);
    }

    const options = this.createExtraArgs(user, contentPrefs);
    return this.eventModel
      .find({
        title: new RegExp(key, 'i'),
        ...options,
      })
      .limit(10)
      .exec();
  }

  async insertMany(events: EventI[]) {
    return await this.eventModel.insertMany(events);
  }
}
