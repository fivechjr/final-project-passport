import { Injectable, BadRequestException } from '@nestjs/common';
import { UserI, User } from 'src/models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CryptoService } from 'src/crypto/crypto.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: Model<UserI>,
    private readonly cryptoService: CryptoService,
  ) {}

  async getAll() {
    return this.userModel.find().exec();
  }

  async getUserByStudentID(studentID: string) {
    return await this.userModel.findOne({ studentID }).exec();
  }

  async getUserByID(userID: string) {
    return await this.userModel.findOne({ _id: userID }).exec();
  }

  async createUser(user: Partial<UserI>) {
    const check = await this.getUserByStudentID(user.studentID);
    if (check) {
      throw new BadRequestException('User already exists.');
    }

    user.faculty = this.getFaculty(user.studentID);
    user.password = this.cryptoService.hashSync(user.password);

    const createUser = new this.userModel(user);

    const {
      firstName,
      lastName,
      studentID,
      ...userInfo
    } = await createUser.save();

    return {
      firstName,
      lastName,
      studentID,
    };
  }

  getFaculty(studentID: string) {
    const FACULTY = {
      Engineering: 'Faculty of Engineering',
      Arts: 'Faculty of Arts',
      Science: 'Faculty of Science',
      Economics: 'Faculty of Economics',
      PoliticalSci: 'Faculty of Political Science',
      Architecture: 'Faculty of Architecture',
      Commerce: 'Faculty of Commerce and Accountancy',
      Education: 'Faculty of Education',
      CommArts: 'Faculty of Communication Arts',
      Medicine: 'Faculty of Medicine',
      VeterinarySci: 'Faculty of Veterinary Science',
      Dentistry: 'Faculty of Dentistry',
      PharmaceuticalSci: 'Faculty of Pharmaceutical Sciences',
      Law: 'Faculty of Law',
      FineArts: 'Faculty of Fine and Applied Arts',
      Nursing: 'Faculty of Nursing',
      Psychology: 'Faculty of Psychology',
      AlliedHealthSci: 'Faculty of Allied Health Sciences',
      SportsSci: 'Faculty of Sports Science',
      SAR: 'School of Agricultural Resources',
      BAScii: 'School Of Integrated Innovation (BAScii)',
    };

    const faculties = {
      [21]: FACULTY.Engineering,
      [22]: FACULTY.Arts,
      [23]: FACULTY.Science,
      [24]: FACULTY.PoliticalSci,
      [25]: FACULTY.Architecture,
      [26]: FACULTY.Commerce,
      [27]: FACULTY.Education,
      [28]: FACULTY.CommArts,
      [29]: FACULTY.Economics,
      [30]: FACULTY.Medicine,
      [31]: FACULTY.VeterinarySci,
      [32]: FACULTY.Dentistry,
      [33]: FACULTY.PharmaceuticalSci,
      [34]: FACULTY.Law,
      [35]: FACULTY.FineArts,
      [36]: FACULTY.Nursing,
      [37]: FACULTY.AlliedHealthSci,
      [38]: FACULTY.Psychology,
      [39]: FACULTY.SportsSci,
      [40]: FACULTY.SAR,
      [56]: FACULTY.BAScii,
    };

    return faculties[Number(studentID.slice(-2))];
  }
}
