import { Injectable } from '@nestjs/common';
import { ResponseService } from 'src/response/response.service';

@Injectable()
export class ExportService {
  constructor(private readonly responseService: ResponseService) {}
  exportEventID(id: string) {
    return this.responseService.getResponseByEventID(id);
  }
}
