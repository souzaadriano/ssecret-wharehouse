import { rest } from '@/controllers';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: rest.constrollers,
  providers: rest.providers,
})
export class RestModule {}
