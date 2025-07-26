import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import router from './routes/index.js';
import cors from '@koa/cors';
import { errorHandler } from './middleware/errorHandler.js';

const app = new Koa();

app.use(errorHandler);

app.use(logger());
app.use(bodyParser({ enableTypes: ['json'] }));
app.use(cors());

app.use(router.routes());
app.use(router.allowedMethods());

export default app;