import { Controller } from '@nestjs/common';

import { FilesService } from 'src/files/files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}
}
