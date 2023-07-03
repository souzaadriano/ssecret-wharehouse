import { UserModel } from '@/core/domain/entities/user/user.model';

export interface IUserRepository {
  save(input: UserModel): Promise<void>;
}
