import { Schema } from 'mongoose';

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
  eventID: Schema.Types.ObjectId,
  users: [
    {
      userID: Schema.Types.ObjectId,
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
