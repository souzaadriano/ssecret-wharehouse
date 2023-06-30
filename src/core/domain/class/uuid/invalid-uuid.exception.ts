import { EXCEPTION_CODE } from '../../exception/exception-code.enum';
import { Exception } from '../../exception/exception.abstract';

export class InvalidUuidException extends Exception {
  constructor(message: string) {
    super(message);
  }

  code = EXCEPTION_CODE.INVALID_INPUT;
}
