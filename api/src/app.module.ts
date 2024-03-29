import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { CryptoModule } from './crypto/crypto.module';
import { EventController } from './event/event.controller';
import { EventModule } from './event/event.module';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { ResponseController } from './response/response.controller';
import { ResponseModule } from './response/response.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { FileModule } from './file/file.module';
import { ExportModule } from './export/export.module';

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
    FileModule,
    ExportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST }) // Excl. Registration
      .forRoutes(EventController, UserController, ResponseController);
  }
}
