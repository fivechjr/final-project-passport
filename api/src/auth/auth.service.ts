import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { CryptoService } from 'src/crypto/crypto.service';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly cryptoService: CryptoService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async createSession(user: any) {
    const check = await this.userService.getUserByStudentID(user.studentID);

    if (!check) {
      throw new UnauthorizedException('Not Found');
    }

    if (!this.cryptoService.compareSync(user.password, check.password)) {
      throw new UnauthorizedException('Invalid Password');
    }

    return {
      user: check.toObject(),
      token: this.jwtService.sign({ userID: check._id }),
    };
  }

  async decode(token: string): Promise<any> {
    return this.jwtService.decode(token);
  }

  async canActivate(token) {
    const userID = this.decode(token);
    return userID;
  }

  destroySession() {
    //   Later
  }
}
