import { Schema } from 'mongoose';

export const User = 'user';

export interface UserI {
  firstName: string;
  lastName: string;
  studentID: string;
  password: string;
  faculty: string;
  bookmarks: string[];
  events: string[];
}

export const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  studentID: String,
  faculty: String,
  password: String,
  bookmarks: [Schema.Types.ObjectId],
  events: [Schema.Types.ObjectId],
});

UserSchema.set('toObject', {
  transform: (doc, ret, opt) => {
    delete ret.password;
    return ret;
  },
});
