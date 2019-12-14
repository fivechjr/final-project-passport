import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { MD5 } from 'crypto-js';
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

  createFileNameHash(name: string) {
    return MD5(name).toString();
  }
}
