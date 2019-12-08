import { Schema } from 'mongoose';

export const User = 'user';

export interface UserI {
  firstName: string;
  lastName: string;
  studentId: string;
  faculty: string;
  bookmarks: string[];
  events: string[];
}

export const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  studentID: String,
  faculty: String,
  bookmarks: [Schema.Types.ObjectId],
  events: [Schema.Types.ObjectId],
});
