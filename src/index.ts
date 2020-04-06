require('dotenv').config()

import * as Koa from 'koa';

import * as logger from 'koa-logger';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import router from './router'
const app = new Koa();

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(router.routes())

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});