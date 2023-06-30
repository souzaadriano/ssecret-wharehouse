import { Bootstrap } from './engines/bootstrap';
import { DatabaseEngine } from './engines/database/database.engine';
import { NestEngine } from './engines/nest/nest.engine';

const application = Bootstrap.createApp([DatabaseEngine, NestEngine]);

application.start().catch(console.error);
