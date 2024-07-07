import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

import { ServerService } from './server.service';

@Controller('server')
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Get()
  async findServer() {
    try {
      const server = await this.serverService.findServer();
      return server;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
