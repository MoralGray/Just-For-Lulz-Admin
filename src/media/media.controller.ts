import { Controller } from '@nestjs/common';

import { MediaService } from 'src/media/media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}
}
