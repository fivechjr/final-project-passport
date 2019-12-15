import { Module } from '@nestjs/common';
import { ResponseModule } from 'src/response/response.module';
import { ExportService } from './export.service';

@Module({
  imports: [ResponseModule],
  providers: [ExportService],
  exports: [ExportService],
})
export class ExportModule {}
