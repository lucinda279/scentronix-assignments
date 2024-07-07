import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosResponse } from 'axios';
import { mockDeep, mockReset } from 'jest-mock-extended';
import { of } from 'rxjs';
import { ServerSummary } from 'src/@types/server';
import { ONLINE_SERVER_NOT_FOUND } from 'src/constants/errorCodes';

import { DatabaseService } from '../database/database.service';
import { ServerService } from './server.service';

const servers: ServerSummary[] = [
  { url: 'url1', priority: 1 },
  { url: 'url2', priority: 4 },
  { url: 'url3', priority: 3 },
  { url: 'url4', priority: 2 },
];

describe('ServerService', () => {
  let serverService: ServerService;

  const mockedHttpService = mockDeep<HttpService>();
  const mockDbService = mockDeep<DatabaseService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServerService,
        {
          provide: HttpService,
          useValue: mockedHttpService,
        },
        {
          provide: DatabaseService,
          useValue: mockDbService,
        },
      ],
    }).compile();

    serverService = module.get<ServerService>(ServerService);
  });

  afterEach(() => {
    mockReset(mockedHttpService);
    mockReset(mockDbService);
  });

  it('should return the online server with the lowest priority', async () => {
    mockDbService.getServers.mockImplementationOnce(() => servers);

    for (const server of servers) {
      switch (server.url) {
        case 'url1':
          mockedHttpService.get.mockImplementationOnce(() => of({ status: 200 } as AxiosResponse));
          break;
        case 'url2':
          mockedHttpService.get.mockImplementationOnce(() => of({ status: 200 } as AxiosResponse));
          break;
        default:
          mockedHttpService.get.mockImplementationOnce(() => of({ status: 400 } as AxiosResponse));
          break;
      }
    }

    const server = await serverService.findServer();

    expect(server.url).toBe('url1');
  });

  it('should return an error if all servers are offline', async () => {
    mockDbService.getServers.mockImplementationOnce(() => servers);

    mockedHttpService.get.mockImplementationOnce(() => of({ status: 400 } as AxiosResponse));

    await expect(serverService.findServer()).rejects.toThrow(ONLINE_SERVER_NOT_FOUND);
  });
});
