import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { DatabaseService } from '../database/database.service';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';

@Module({
  imports: [HttpModule],
  providers: [ServerService, DatabaseService],
  controllers: [ServerController],
})
export class ServerModule {}
