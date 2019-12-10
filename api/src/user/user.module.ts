import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { CryptoModule } from 'src/crypto/crypto.module';
import { CryptoService } from 'src/crypto/crypto.service';
import { EventModule } from 'src/event/event.module';
import { User, UserSchema } from 'src/models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: User, schema: UserSchema }]),
    CryptoModule,
    EventModule,
  ],
  controllers: [UserController],
  providers: [ConfigService, UserService, CryptoService],
  exports: [UserService],
})
export class UserModule {}
