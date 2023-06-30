/** Types generated for queries found in "src/engines/database/sql/users.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'CreateUser' parameters type */
export interface ICreateUserParams {
  email?: string | null | void;
  hash?: string | null | void;
  id?: string | null | void;
  name?: string | null | void;
}

/** 'CreateUser' return type */
export type ICreateUserResult = void;

/** 'CreateUser' query type */
export interface ICreateUserQuery {
  params: ICreateUserParams;
  result: ICreateUserResult;
}

const createUserIR: any = {"usedParamSet":{"id":true,"name":true,"email":true,"hash":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":62,"b":64}]},{"name":"name","required":false,"transform":{"type":"scalar"},"locs":[{"a":67,"b":71}]},{"name":"email","required":false,"transform":{"type":"scalar"},"locs":[{"a":74,"b":79}]},{"name":"hash","required":false,"transform":{"type":"scalar"},"locs":[{"a":82,"b":86}]}],"statement":"INSERT INTO\n    \"users\" (id, \"name\", email, hash)\nVALUES\n    (:id, :name, :email, :hash)"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO
 *     "users" (id, "name", email, hash)
 * VALUES
 *     (:id, :name, :email, :hash)
 * ```
 */
export const createUser = new PreparedQuery<ICreateUserParams,ICreateUserResult>(createUserIR);


