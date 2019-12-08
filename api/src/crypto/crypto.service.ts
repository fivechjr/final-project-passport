import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class CryptoService {
  constructor(private readonly configService: ConfigService) {}

  hashSync(data: string) {
    return bcrypt.hashSync(data, 8);
  }

  compareSync(x: string, y: string) {
    return bcrypt.compareSync(x, y);
  }
}
