import { Controller } from '@nestjs/common';

import { PagesService } from 'src/pages/pages.service';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}
}
