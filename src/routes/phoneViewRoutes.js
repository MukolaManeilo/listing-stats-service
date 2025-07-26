import Router from 'koa-router';
import PhoneViewController from '../controllers/phoneViewController.js';
import PhoneViewService from '../services/phoneViewService.js';
import PhoneViewRepository from '../repositories/phoneViewRepository.js';
import { validatePhoneView, validateAutoId } from '../middleware/validation.js';

const router = new Router();

const phoneViewRepository = new PhoneViewRepository();
const phoneViewService = new PhoneViewService(phoneViewRepository);
const phoneViewController = new PhoneViewController(phoneViewService);

router.post('/',
	validatePhoneView,
	phoneViewController.recordView.bind(phoneViewController)
);

router.get('/:autoId',
	validateAutoId,
	phoneViewController.getViewsCount.bind(phoneViewController)
);

export default router;