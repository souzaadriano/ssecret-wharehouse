import { Bootstrap } from './engines/bootstrap';
import { DatabaseEngine } from './engines/database/database.engine';

const application = Bootstrap.createApp([DatabaseEngine]);

application.start().catch(console.error);
