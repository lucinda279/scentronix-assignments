import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Server, ServerSummary } from 'src/@types/server';
import { ONLINE_SERVER_NOT_FOUND } from 'src/constants/errorCodes';
import { REQUEST_TIME_OUT } from 'src/constants/http';

import { DatabaseService } from '../database/database.service';

@Injectable()
export class ServerService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly httpService: HttpService,
  ) {}

  async findServer(): Promise<Server> {
    const servers = this.databaseService.getServers();
    const promises = servers.map((x) => this.checkServerStatus(x));
    const results = await Promise.all(promises);
    const onlineServers = results.filter((x) => x.online);

    if (onlineServers.length === 0) {
      throw new Error(ONLINE_SERVER_NOT_FOUND);
    }

    onlineServers.sort((x, y) => x.priority - y.priority);

    return onlineServers[0];
  }

  private async checkServerStatus(server: ServerSummary): Promise<Server> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(server.url, {
          timeout: REQUEST_TIME_OUT,
        }),
      );

      if (response.status >= 200 && response.status < 300) {
        return { ...server, online: true };
      }

      return { ...server, online: false };
    } catch {
      return { ...server, online: false };
    }
  }
}
