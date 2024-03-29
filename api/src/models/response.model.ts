import { Schema } from 'mongoose';
import { Event } from './event.model';
import { User } from './user.model';

export const Response = 'response';

interface U {
  userID: string;
  status: number;
  createdAt: string;
  updatedAt: string;
}

export interface ResponseI {
  eventID: string;
  users: U[];
}

export const ResponseSchema = new Schema({
  eventID: {
    type: Schema.Types.ObjectId,
    ref: Event,
  },
  users: [
    {
      userID: {
        type: Schema.Types.ObjectId,
        ref: User,
      },
      status: {
        type: Number,
        enum: [0, 1],
        default: 1,
      },
      createdAt: Date,
      updatedAt: Date,
    },
  ],
});
