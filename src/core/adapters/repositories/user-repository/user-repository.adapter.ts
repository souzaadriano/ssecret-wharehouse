import { UserModel } from '@/core/domain/entities/user/user.model';
import { UsersAccessor } from '@/engines/database/accessors';
import { IUserRepository } from './user-repository.contract';

export class UserRepository implements IUserRepository {
  constructor(private readonly _dependencies: Dependencies) {}

  async save(user: UserModel): Promise<void> {
    const { usersAccessor } = this._dependencies;
    await usersAccessor.createUser({
      email: user.email,
      hash: user.hash.value,
      id: user.id,
      name: user.name,
    });
  }
}

export type Dependencies = {
  usersAccessor: UsersAccessor;
};
