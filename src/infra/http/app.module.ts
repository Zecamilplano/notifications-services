import { Module } from '@nestjs/common';
import { DatebaseModules } from '../database/databasese.modules';
import { HttpModule } from './dtos/http.modules';

@Module({
  imports: [HttpModule, DatebaseModules],
})
export class AppModule {}
