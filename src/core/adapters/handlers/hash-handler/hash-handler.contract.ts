import { Hash } from '@/core/domain/class/hash/hash.class';

export interface IHashHandler {
  validate(hash: Hash, value: string): Promise<boolean>;
  generate(hash: Hash): Promise<Hash>;
}
