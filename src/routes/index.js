import Router from 'koa-router';
import listingViewRoutes from './listingViewRoutes.js';
import phoneViewRoutes from './phoneViewRoutes.js';
import statisticsRoutes from './statisticsRoutes.js';

const router = new Router();

router.get('/health', async (ctx) => {
    ctx.body = { message: 'Ok' };
});

router.use('/listing-views', listingViewRoutes.routes(), listingViewRoutes.allowedMethods());
router.use('/phone-views', phoneViewRoutes.routes(), phoneViewRoutes.allowedMethods());
router.use('/statistics', statisticsRoutes.routes(), statisticsRoutes.allowedMethods());

export default router;