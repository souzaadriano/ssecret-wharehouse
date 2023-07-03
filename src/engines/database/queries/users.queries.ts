/** Types generated for queries found in "src/engines/database/sql/users.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'CreateUser' parameters type */
export interface ICreateUserParams {
  createdAt?: Date | string | null | void;
  deletedAt?: Date | string | null | void;
  email?: string | null | void;
  hash?: string | null | void;
  id?: string | null | void;
  name?: string | null | void;
  updatedAt?: Date | string | null | void;
}

/** 'CreateUser' return type */
export type ICreateUserResult = void;

/** 'CreateUser' query type */
export interface ICreateUserQuery {
  params: ICreateUserParams;
  result: ICreateUserResult;
}

const createUserIR: any = {"usedParamSet":{"id":true,"name":true,"email":true,"hash":true,"createdAt":true,"updatedAt":true,"deletedAt":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":178,"b":180}]},{"name":"name","required":false,"transform":{"type":"scalar"},"locs":[{"a":191,"b":195}]},{"name":"email","required":false,"transform":{"type":"scalar"},"locs":[{"a":206,"b":211}]},{"name":"hash","required":false,"transform":{"type":"scalar"},"locs":[{"a":222,"b":226}]},{"name":"createdAt","required":false,"transform":{"type":"scalar"},"locs":[{"a":237,"b":246}]},{"name":"updatedAt","required":false,"transform":{"type":"scalar"},"locs":[{"a":257,"b":266}]},{"name":"deletedAt","required":false,"transform":{"type":"scalar"},"locs":[{"a":277,"b":286}]}],"statement":"INSERT INTO\n    \"users\" (\n        \"id\",\n        \"name\",\n        \"email\",\n        \"hash\",\n        \"createdAt\",\n        \"updatedAt\",\n        \"deletedAt\"\n    )\nVALUES\n    (\n        :id,\n        :name,\n        :email,\n        :hash,\n        :createdAt,\n        :updatedAt,\n        :deletedAt\n    )"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO
 *     "users" (
 *         "id",
 *         "name",
 *         "email",
 *         "hash",
 *         "createdAt",
 *         "updatedAt",
 *         "deletedAt"
 *     )
 * VALUES
 *     (
 *         :id,
 *         :name,
 *         :email,
 *         :hash,
 *         :createdAt,
 *         :updatedAt,
 *         :deletedAt
 *     )
 * ```
 */
export const createUser = new PreparedQuery<ICreateUserParams,ICreateUserResult>(createUserIR);


