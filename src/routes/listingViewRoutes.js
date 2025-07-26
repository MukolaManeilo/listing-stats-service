import Router from 'koa-router';
import ListingViewController from '../controllers/listingViewController.js';
import ListingViewService from '../services/listingViewService.js';
import ListingViewRepository from '../repositories/listingViewRepository.js';
import { validateListingView, validateAutoId } from '../middleware/validation.js';

const router = new Router();

const listingViewRepository = new ListingViewRepository();
const listingViewService = new ListingViewService(listingViewRepository);
const listingViewController = new ListingViewController(listingViewService);

router.post('/',
	validateListingView,
	listingViewController.recordView.bind(listingViewController)
);

router.get('/:autoId',
	validateAutoId,
	listingViewController.getViewsCount.bind(listingViewController)
);

export default router;