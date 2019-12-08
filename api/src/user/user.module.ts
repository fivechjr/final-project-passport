import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema, User } from 'src/models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { CryptoModule } from 'src/crypto/crypto.module';
import { CryptoService } from 'src/crypto/crypto.service';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: User, schema: UserSchema }]),
    CryptoModule,
  ],
  controllers: [UserController],
  providers: [ConfigService, UserService, CryptoService],
  exports: [UserService],
})
export class UserModule {}
