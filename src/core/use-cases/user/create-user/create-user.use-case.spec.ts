import { IGeneratorHandler } from '@/core/adapters/handlers/generator-handler/generator-handler.contract';
import { FAKE_UUID, GeneratorHandlerMock } from '@/core/adapters/handlers/generator-handler/generator-handler.mock';
import { IHashHandler } from '@/core/adapters/handlers/hash-handler/hash-handler.contract';
import { HashHandlerMock } from '@/core/adapters/handlers/hash-handler/hash-handler.mock';
import { IUserRepository } from '@/core/adapters/repositories/user-repository/user-repository.contract';
import { UserRepositoryMock } from '@/core/adapters/repositories/user-repository/user-repository.mock';
import { CreateUserUseCase } from './create-user.use-case';

describe('create-user.use-case', () => {
  let sut: CreateUserUseCase;
  const generatorHandler: IGeneratorHandler = GeneratorHandlerMock.get();
  const hashHandler: IHashHandler = HashHandlerMock.get();
  const userRepository: IUserRepository = UserRepositoryMock.get();

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

    expect(result.id).toBe(FAKE_UUID);
    expect(generatorHandler.uuid).toBeCalledTimes(1);
    expect(hashHandler.generate).toBeCalledTimes(1);
    expect(userRepository.save).toBeCalledTimes(1);
  });
});
