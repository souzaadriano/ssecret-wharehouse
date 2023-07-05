import { JsonDocument, JsonValue } from '../types/json-document.type';
import { EXCEPTION_CODE } from './exception-code.enum';

export abstract class AbstractException extends Error {
  private _isUpgraded = false;
  protected readonly _details: Map<string, JsonValue> = new Map<string, JsonValue>();
  abstract readonly code: EXCEPTION_CODE;

  constructor(input: string | Error) {
    super(input instanceof Error ? input.message : input);
    if (input instanceof Error) this._upgradeError(input);
  }

  public getDetails(): JsonDocument {
    const entries = Array.from(this._details.entries());
    return Object.fromEntries(entries);
  }

  isUpgraded(): boolean {
    return this._isUpgraded;
  }

  toJson() {
    return JSON.stringify({
      isUpgraded: this.isUpgraded(),
      details: this.getDetails(),
      name: this.name,
      code: this.code,
      message: this.message,
      stack: this.stack ?? 'not found stack',
    });
  }

  protected _setDetails(key: string, value: JsonValue) {
    this._details.set(key, value);
  }

  private _upgradeError(error: Error) {
    this.stack = error.stack;
    this.name = `${error.name}:${this.name}`;
    this._isUpgraded = true;
  }
}
