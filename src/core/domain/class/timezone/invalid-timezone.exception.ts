import { EXCEPTION_CODE } from '../../exception/exception-code.enum';
import { Exception } from '../../exception/exception.abstract';

export class InvalidTimezoneException extends Exception {
  constructor(timezone: string) {
    super(`invalid timezone: ${timezone}`);
    this._setDetails('timezone', timezone);
  }
  code = EXCEPTION_CODE.INVALID_INPUT;
}
