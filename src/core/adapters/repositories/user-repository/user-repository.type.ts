import { Email } from '@/core/domain/class/email/email.class';
import { Hash } from '@/core/domain/class/hash/hash.class';
import { Uuid } from '@/core/domain/class/uuid/uuid.class';

export type TCreateUser = {
  id: Uuid;
  name: string;
  email: Email;
  hash: Hash;
};
