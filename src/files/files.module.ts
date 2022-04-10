import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { FilesService } from 'src/files/files.service';
import { FilesController } from 'src/files/files.controller';
import { File } from 'src/files/entities/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
