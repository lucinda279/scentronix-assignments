import { Test, TestingModule } from '@nestjs/testing';
import { mockDeep } from 'jest-mock-extended';
import { ServerSummary } from 'src/@types/server';
import { ONLINE_SERVER_NOT_FOUND } from 'src/constants/errorCodes';

import { ServerController } from './server.controller';
import { ServerService } from './server.service';

const servers: ServerSummary[] = [
  { url: 'url1', priority: 1 },
  { url: 'url2', priority: 4 },
  { url: 'url3', priority: 3 },
];

describe('ServerController', () => {
  let serverController: ServerController;

  const mockDbService = mockDeep<ServerService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServerController],
      providers: [
        {
          provide: ServerService,
          useValue: mockDbService,
        },
      ],
    }).compile();

    serverController = module.get<ServerController>(ServerController);
  });

  it('should return the online server with the lowest priority', async () => {
    mockDbService.findServer.mockResolvedValue(servers[2]);

    expect(await serverController.findServer()).toBe(servers[2]);
  });

  it('should throw an error if all servers are offline', async () => {
    mockDbService.findServer.mockRejectedValue(new Error(ONLINE_SERVER_NOT_FOUND));

    await expect(serverController.findServer()).rejects.toThrow(ONLINE_SERVER_NOT_FOUND);
  });
});
