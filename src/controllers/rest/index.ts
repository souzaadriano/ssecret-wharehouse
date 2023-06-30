import { HealthCheckService, SystemController } from './health-check';
import { UserController, UserService } from './user';

const constrollers = [SystemController, UserController];
const providers = [HealthCheckService, UserService];

export const rest = {
  constrollers,
  providers,
};
