import { UsersAccessor } from '@/engines/database/accessors';
import { mock } from 'jest-mock-extended';
import { Hash } from '../../../domain/class/hash/hash.class';
import { Uuid } from '../../../domain/class/uuid/uuid.class';
import { UserModel } from '../../../domain/entities/user/user.model';
import { IHashHandler } from '../../handlers/hash-handler/hash-handler.contract';
import { UserRepository } from './user-repository.adapter';

describe('users-repository.adapter', () => {
  const usersAccessorMock: UsersAccessor = mock<UsersAccessor>();
  const hashHandler: IHashHandler = mock<IHashHandler>();
  const sut = new UserRepository({ usersAccessor: usersAccessorMock });

  it('should be save user on databsae', async () => {
    await sut.save(
      UserModel.create({
        email: 'test@test.com',
        hash: new Hash('hash-test', hashHandler),
        id: new Uuid('uuid'),
        name: 'test',
      }),
    );

    expect(usersAccessorMock.createUser).toBeCalledTimes(1);
    expect(usersAccessorMock.createUser).toBeCalledWith({
      email: 'test@test.com',
      hash: 'hash-test',
      id: 'uuid',
      name: 'test',
    });
  });
});
