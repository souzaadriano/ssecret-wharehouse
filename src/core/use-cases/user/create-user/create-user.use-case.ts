import { IUseCase } from '../../use-case.contract';

export class CreateUserUseCase implements IUseCase<Input, Output> {
  async handle(input: Input): Promise<Output> {
    throw new Error('Method not implemented.');
  }
}

export type Input = {
  name: string;
  email: string;
  password: string;
};

export type Output = {
  userId: string;
};
