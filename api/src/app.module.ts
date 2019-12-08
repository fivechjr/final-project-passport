import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { ResponseModule } from './response/response.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CryptoModule } from './crypto/crypto.module';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { UserController } from './user/user.controller';
import { ResponseController } from './response/response.controller';
import { EventController } from './event/event.controller';

@Module({
  imports: [
    UserModule,
    AuthModule,
    EventModule,
    ResponseModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_URL'),
      }),
      inject: [ConfigService],
    }),
    CryptoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST }) // Excl. Registration
      .forRoutes(UserController, ResponseController);
  }
}
