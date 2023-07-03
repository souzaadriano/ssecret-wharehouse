import { InvalidInputException } from '../../exception/shared/invalid-input.exception';

export class Email {
  private static readonly _validate = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, 'gm');
  constructor(private readonly _value: string) {}

  static create(value: string): Email {
    if (Email._validate.test(value)) return new Email(value);
    throw new InvalidInputException(`${value} is a invalid email`, { value });
  }

  get value(): string {
    return this._value;
  }
}
