import { Singleton } from '@/helpers/singleton.decorator';
import { EventEmitter2 } from 'eventemitter2';
import { IEngine } from '../engine.contract';

@Singleton
export class EventEngine implements IEngine {
  private _eventEngine: EventEmitter2;

  async init(): Promise<void> {
    if (this._eventEngine) return;
    this._eventEngine = new EventEmitter2();
  }
}
