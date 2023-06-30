import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly _startedAt = new Date();

  async create() {
    return {};
  }

  async list() {
    return [];
  }
}
