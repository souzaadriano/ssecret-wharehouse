import { IGeneratorHandler } from '@/core/adapters/handlers/generator-handler/generator-handler.contract';
import { IHashHandler } from '@/core/adapters/handlers/hash-handler/hash-handler.contract';
import { IUserRepository } from '@/core/adapters/repositories/user-repository/user-repository.contract';
import { Email } from '@/core/domain/class/email/email.class';
import { Uuid } from '@/core/domain/class/uuid/uuid.class';
import { IUseCase } from '../../use-case.contract';

export class CreateUserUseCase implements IUseCase<Input, Output> {
  constructor(private readonly _dependencies: Dependencies) {}

  async handle(input: Input): Promise<Output> {
    const { email } = input;
    const userId = await this._createUser(input);
    return { id: userId.value, email: email };
  }

  private async _createUser(input: Input): Promise<Uuid> {
    const { email, name, password } = input;
    const { generatorHandler, hashHandler, userRepository } = this._dependencies;
    const userId = generatorHandler.uuid();
    const hash = await hashHandler.generate(password);

    await userRepository.save({
      email: new Email(email),
      id: userId,
      hash,
      name,
    });

    return userId;
  }
}

type Dependencies = {
  userRepository: IUserRepository;
  hashHandler: IHashHandler;
  generatorHandler: IGeneratorHandler;
};

export type Input = {
  name: string;
  email: string;
  password: string;
};

export type Output = {
  email: string;
  id: string;
};
