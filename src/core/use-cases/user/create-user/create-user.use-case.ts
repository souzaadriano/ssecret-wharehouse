import { IGeneratorHandler } from '@/core/adapters/handlers/generator-handler/generator-handler.contract';
import { IHashHandler } from '@/core/adapters/handlers/hash-handler/hash-handler.contract';
import { IUserRepository } from '@/core/adapters/repositories/user-repository/user-repository.contract';
import { Email } from '@/core/domain/class/email/email.class';
import { UserModel } from '@/core/domain/entities/user/user.model';
import { IUseCase } from '../../use-case.contract';
import { EmailAlreadyExistsException } from './exception/email-already-exists.exception';

export class CreateUserUseCase implements IUseCase<Input, Output> {
  constructor(private readonly _dependencies: Dependencies) {}

  async handle(input: Input): Promise<Output> {
    const { email } = input;
    const { userRepository } = this._dependencies;
    const user = await this._createUser(input);
    await this._emailNotRegistred(user);
    await userRepository.save(user);

    return { id: user.id, email: email };
  }

  private async _emailNotRegistred(user: UserModel) {
    const { userRepository } = this._dependencies;
    const founded = await userRepository.findByEmail(new Email(user.email));
    if (founded) throw new EmailAlreadyExistsException(user.email);
  }

  private async _createUser(input: Input): Promise<UserModel> {
    const { email, name, password } = input;
    const { generatorHandler, hashHandler } = this._dependencies;
    const userId = generatorHandler.uuid();
    const hash = await hashHandler.generate(password);
    const user = UserModel.create({
      email,
      hash,
      id: userId,
      name: name,
    });

    return user;
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
