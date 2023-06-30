import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  async createUser() {
    return await this.service.create();
  }

  @Get()
  async listUsers() {
    return await this.service.list();
  }
}
