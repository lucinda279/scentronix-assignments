import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import path from 'path';
import { ServerSummary } from 'src/@types/server';

@Injectable()
export class DatabaseService {
  private readonly dbPath;

  constructor() {
    this.dbPath = path.resolve(__dirname, '../../../db.json');
  }

  getServers(): ServerSummary[] {
    const data = fs.readFileSync(this.dbPath, 'utf8');
    return JSON.parse(data).servers;
  }
}
