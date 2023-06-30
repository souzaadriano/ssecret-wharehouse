import { IHashHandler } from '@/core/adapters/handlers/hash-handler/hash-handler.contract';

export class Hash {
  private readonly _value: string;

  constructor(private readonly _handler: IHashHandler) {}

  async match(value: string): Promise<boolean> {
    return await this._handler.validate(this, value);
  }

  get value(): string {
    return this._value;
  }
}
