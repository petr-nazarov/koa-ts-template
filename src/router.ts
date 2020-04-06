// Basic imports
import * as Router from 'koa-router';

// Middleware imports
import RequestHandlerMiddleware from './middleware/RequestHandlerMiddleware';

// Controller imports
import HelloController from './controllers/HelloController';

// Controller creation
const helloController = new HelloController();

const router = new Router();

// Hello
router.get('/hello', async (ctx) => helloController.getHi(ctx));
router.post('/hello', async (ctx) => helloController.postHi(ctx));

export default router;
