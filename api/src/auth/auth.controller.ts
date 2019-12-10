import { Body, Controller, Post } from '@nestjs/common';
import { CreateSessionDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  createSession(@Body() user: CreateSessionDTO) {
    return this.authService.createSession(user);
  }
}
