import { Singleton } from '@/helpers/singleton.decorator';
import { Client } from 'pg';
import { IEngine } from '../engine.contract';
import { DatabaseConfig } from './database.config';

@Singleton
export class DatabaseEngine implements IEngine {
  private readonly _configuration = new DatabaseConfig();
  private _client: Client;

  async init(): Promise<void> {
    if (this._client) return;
    this._client = new Client(this._configuration);
    await this._client.connect();
  }

  private _isConnected(): void {
    if (this._client) return;
    throw new Error('database not connected');
  }
}
