import { GeneratorHandler } from '@/core/adapters/handlers/generator-handler/generator-handler.adapter';
import { GeneratorHandlerMock } from '@/core/adapters/handlers/generator-handler/generator-handler.mock';
import { IHashHandler } from '@/core/adapters/handlers/hash-handler/hash-handler.contract';
import { IUserRepository } from '@/core/adapters/repositories/user-repository/user-repository.contract';
import { Uuid } from '@/core/domain/class/uuid/uuid.class';
import { mock } from 'jest-mock-extended';
import { CreateUserUseCase } from './create-user.use-case';

describe('create-user.use-case', () => {
  let sut: CreateUserUseCase;
  GeneratorHandlerMock.override('uuid').return(new Uuid('test'));
  const generatorHandler = GeneratorHandler.mock();
  const hashHandler: IHashHandler = mock<IHashHandler>();
  const userRepository: IUserRepository = mock<IUserRepository>();

  beforeAll(() => {
    sut = new CreateUserUseCase({
      generatorHandler,
      hashHandler,
      userRepository,
    });
  });

  it('should be create user and save at repository', async () => {
    const result = await sut.handle({
      email: 'test@email.com.br',
      name: 'teste',
      password: 'password1234',
    });

    expect(result.id).toBe('test');
  });
});
