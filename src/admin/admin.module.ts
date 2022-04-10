import AdminJS from 'adminjs';
import { AdminModule as AdminJsModule } from '@adminjs/nestjs';
import * as adminJsTypeorm from '@adminjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { Media } from 'src/media/entities/media.entity';
import { Page } from 'src/pages/entities/page.entity';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';
import { UserStatus } from 'src/users-status/entities/user-status.entity';
import { User } from 'src/users/entities/user.entity';
import { File } from 'src/files/entities/file.entity';

AdminJS.registerAdapter(adminJsTypeorm);

const menu = {
  users: { name: 'Users', icon: 'User' },
  files: { name: 'Files' },
  media: { name: 'Media' },
  pages: { name: 'Pages' },
  subscriptions: { name: 'Subscriptions' },
  usersStatus: { name: 'Users Status' },
};

@Module({
  imports: [
    AdminJsModule.createAdminAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            {
              resource: User,
              options: {
                navigation: menu.users,
              },
            },
            {
              resource: File,
              options: {
                navigation: menu.files,
              },
            },
            {
              resource: Media,
              options: {
                navigation: menu.media,
              },
            },
            {
              resource: Page,
              options: {
                navigation: menu.pages,
              },
            },
            {
              resource: Subscription,
              options: {
                navigation: menu.subscriptions,
              },
            },
            {
              resource: UserStatus,
              options: {
                navigation: menu.usersStatus,
              },
            },
          ],
        },
        auth: {
          authenticate: async (email, password) =>
            Promise.resolve({ email: 'test' }),
          cookieName: 'test',
          cookiePassword: 'test',
        },
      }),
    }),
  ],
})
export class AdminModule {}
