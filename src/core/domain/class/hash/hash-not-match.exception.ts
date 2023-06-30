import { EXCEPTION_CODE } from '../../exception/exception-code.enum';
import { Exception } from '../../exception/exception.abstract';

export class HashNotMatchException extends Exception {
  constructor() {
    super('value not match');
  }
  readonly code = EXCEPTION_CODE.INVALID_INPUT;
}
