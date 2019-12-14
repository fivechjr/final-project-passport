import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { MemoryStorage } from 'multer';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { CryptoModule } from 'src/crypto/crypto.module';
import { FileService } from './file.service';

@Module({
  imports: [
    ConfigModule,
    CryptoModule,
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        storage: MemoryStorage,
        limits: {
          fileSize: 5 * 1024 * 1024,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
