import { Schema } from 'mongoose';
import { Event } from './event.model';

export const User = 'user';

export interface ContentPreferenceI {
  key: string;
  value: number;
}

export interface UserI {
  firstName: string;
  lastName: string;
  studentID: string;
  password: string;
  profileImageURL?: string;
  faculty: string;
  bookmarks: string[];
  events: string[];
  contentPreferences: ContentPreferenceI[];
}

export const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  studentID: String,
  faculty: String,
  password: String,
  profileImageURL: {
    type: String,
    required: false,
    default: null,
  },
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: Event,
    },
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: Event,
    },
  ],
  contentPreferences: [
    {
      key: String,
      value: {
        type: Number,
        enum: [0, 1],
        default: 0, // 0 = False, 1 = True
      },
    },
  ],
});

UserSchema.set('toObject', {
  transform: (_, ret, __) => {
    delete ret.password;
    return ret;
  },
});
