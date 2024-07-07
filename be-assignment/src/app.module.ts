import { Module } from '@nestjs/common';

import { ServerModule } from './modules/server/server.module';

@Module({
  imports: [ServerModule],
})
export class AppModule {}
