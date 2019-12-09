import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}
  async use(req: any, res: any, next: () => void) {
    if (!req.headers.authorization) {
      throw new UnauthorizedException('No JWT');
    }

    const verify = await this.authService.decode(
      req.headers.authorization.split(' ')[1],
    );

    if (!verify) {
      throw new UnauthorizedException('Invalid JWT');
    }

    req.userID = verify.userID;
    next();
  }
}
