import { ContentPreferenceI, UserI } from 'src/models/user.model';

export class CreateUserDTO implements Partial<UserI> {
  firstName: string;
  lastName: string;
  studentID: string;
  password: string;
}

export class UpdateContentPreferenceDTO implements ContentPreferenceI {
  key: string;
  value: number;
}
