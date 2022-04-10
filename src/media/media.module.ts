import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { MediaService } from 'src/media/media.service';
import { MediaController } from 'src/media/media.controller';
import { Media } from 'src/media/entities/media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
