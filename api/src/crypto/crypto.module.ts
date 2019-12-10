import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { CryptoService } from './crypto.service';

@Module({
  imports: [ConfigModule],
  providers: [ConfigService, CryptoService],
  exports: [CryptoService],
})
export class CryptoModule {}
