import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [UserModule, AuthModule, EventModule, ResponseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
