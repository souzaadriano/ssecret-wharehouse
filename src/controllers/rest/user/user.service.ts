import { CreateUserFactory } from '@/factories/use-cases/create-user.factory';
import { Injectable } from '@nestjs/common';
import { CreateUserSchema } from './schemas';

@Injectable()
export class UserService {
  private readonly _startedAt = new Date();
  private readonly _createUserUseCase = CreateUserFactory.instance();

  async create(input: CreateUserSchema) {
    const { email, id } = await this._createUserUseCase.handle(input);
    return { email, id };
  }

  async list() {
    return [];
  }
}
