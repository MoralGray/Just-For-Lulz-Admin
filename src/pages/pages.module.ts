import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { PagesService } from 'src/pages/pages.service';
import { PagesController } from 'src/pages/pages.controller';
import { Page } from 'src/pages/entities/page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Page])],
  controllers: [PagesController],
  providers: [PagesService],
})
export class PagesModule {}
