import { InvalidInputException } from '../../exception/shared/invalid-input.exception';
import { Email } from './email.class';

const validEmailList = [
  'test@test.com',
  'test.xpto@test.com',
  'test_test@test.com',
  'test@test.com.br',
  'test1@test.com',
  'test_1@test.com',
  'test.1@test.com',
];

const invalidEmailList = ['test&.com.br', 'test1234@test.c.b', 'test1234@test.c', 'test||1234@test.c.b'];

describe('email.class', () => {
  describe('on success', () => {
    it.each(validEmailList)('should create a valid email with value %s', (value) => {
      const email = Email.create(value);
      expect(email.value).toBe(value);
    });
  });

  describe('on fail', () => {
    it.each(invalidEmailList)('should trhow a InvalidInputException for email %s', (value) => {
      expect(() => Email.create(value)).toThrow(InvalidInputException);
    });
  });
});
