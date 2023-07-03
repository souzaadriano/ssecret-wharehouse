import { Singleton } from '@/helpers/singleton.decorator';
import { DATABASE_OPERATION, DatabaseException } from '../database.exception';
import { ICreateUserParams, createUser } from '../queries/users.queries';
import { AbstractDatabaseAccessor } from './database-accessor.abstract';

@Singleton
export class UsersAccessor extends AbstractDatabaseAccessor {
  async createUser(params: ICreateUserParams): Promise<void> {
    await this._database.execute(params, createUser).catch((error) => {
      throw new DatabaseException({ error, operation: DATABASE_OPERATION.INSERT, statement: 'createUser' });
    });
  }
}
