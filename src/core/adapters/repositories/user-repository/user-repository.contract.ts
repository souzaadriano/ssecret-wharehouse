import { TCreateUser } from './user-repository.type';

export interface IUserRepository {
  save(input: TCreateUser): Promise<void>;
}
