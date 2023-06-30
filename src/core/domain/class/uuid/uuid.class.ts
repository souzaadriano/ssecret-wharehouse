import { InvalidUuidException } from './invalid-uuid.exception';

export class Uuid {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  static create(value: string) {
    Uuid.validate(value);
    return new Uuid(value);
  }

  get value(): string {
    return this._value;
  }

  static validate(value: string): void {
    const [timeHigh, timeLow, version, family, node] = value.split('-');
    if (timeHigh.length !== 8)
      throw new InvalidUuidException(`invalid time-high size, must be 8 and got ${timeHigh.length}`);
    if (timeLow.length !== 4)
      throw new InvalidUuidException(`invalid time-low size, must be 4 and got ${timeLow.length}`);
    if (version.length !== 4)
      throw new InvalidUuidException(`invalid version size, must be 4 and got ${version.length}`);
    if (!version.startsWith('4', 0)) throw new InvalidUuidException(`invalid uuid version`);
    if (family.length !== 4) throw new InvalidUuidException(`invalid family size, must be 4 and got ${family.length}`);
    if (node.length !== 12) throw new InvalidUuidException(`invalid node size, must be 12 and got ${node.length}`);
  }
}
