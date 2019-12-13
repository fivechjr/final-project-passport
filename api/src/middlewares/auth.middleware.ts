import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}
  async use(req: any, res: any, next: () => void) {
    if (!req.headers.authorization) {
      throw new UnauthorizedException('No JWT');
    }

    try {
      const verify = await this.authService.decode(
        req.headers.authorization.split(' ')[1],
      );
      const userID = verify.userID;
      const user = await this.userService.getUserByID(userID);
      req.user = user;
      req.userID = userID;
      next();
    } catch (e) {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }
}
