import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserSchema } from './schemas';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  async createUser(@Body() input: CreateUserSchema) {
    return await this.service.create(input);
  }

  @Get()
  async listUsers() {
    return await this.service.list();
  }
}
