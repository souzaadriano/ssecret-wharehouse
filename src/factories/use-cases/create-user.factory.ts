import { CreateUserUseCase } from '@/core/use-cases/user/create-user/create-user.use-case';
import { GeneratorHandlerFactory, HashHandlerFactory } from '../adapters';
import { UserRepositoryFactory } from '../repositories';

export abstract class CreateUserFactory {
  private static _instance: CreateUserUseCase;

  static instance(): CreateUserUseCase {
    if (!CreateUserFactory._instance) {
      CreateUserFactory._instance = new CreateUserUseCase({
        generatorHandler: GeneratorHandlerFactory.instance(),
        hashHandler: HashHandlerFactory.instance(),
        userRepository: UserRepositoryFactory.instance(),
      });
    }

    return CreateUserFactory._instance;
  }
}
