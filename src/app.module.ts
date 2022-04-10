import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FilesModule } from 'src/files/files.module';
import { MediaModule } from 'src/media/media.module';
import { PagesModule } from 'src/pages/pages.module';
import { SubscriptionsModule } from 'src/subscriptions/subscriptions.module';
import { UsersModule } from 'src/users/users.module';
import { UsersStatusModule } from 'src/users-status/users-status.module';
import { AdminModule } from './admin/admin.module';

// workaround for Error: self signed certificate
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

@Module({
  imports: [
    ConfigModule.forRoot(),
    FilesModule,
    MediaModule,
    PagesModule,
    SubscriptionsModule,
    UsersModule,
    UsersStatusModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        extra: {
          ssl: true,
        },
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
