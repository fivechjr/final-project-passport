import { Module } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';

@Module({
  imports: [ConfigModule],
  providers: [ConfigService, CryptoService],
  exports: [CryptoService],
})
export class CryptoModule {}
