import { UserI } from 'src/models/user.model';

export class CreateUserDTO implements Partial<UserI> {
  firstName: string;
  lastName: string;
  studentID: string;
  password: string;
}
