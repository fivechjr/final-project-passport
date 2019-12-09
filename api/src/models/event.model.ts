import { Schema } from 'mongoose';

export const Event = 'event';

interface ScheduleI {
  startTime: string;
  agenda: string;
}

interface E {
  date: string;
  startTime: string;
  endTime: string;
  schedule: ScheduleI[];
}

export interface EventI {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  posterImage: string;
  backgroundColor: string;
  location: {
    faculty: string;
    building: string;
  };
  organizer: string;
  schedules: E[];
}

export const EventSchema = new Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  posterImage: String,
  backgroundColor: String,
  location: {
    faculty: String,
    building: String,
  },
  organizer: String,
  schedules: [
    {
      date: Date,
      startTime: String,
      endTime: String,
      schedule: [
        {
          startTime: String,
          agenda: String,
        },
      ],
    },
  ],
});

EventSchema.index({ title: 'text' });
