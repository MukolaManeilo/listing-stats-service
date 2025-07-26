import { Context } from 'koa';
import { ListingViewService } from '../services/listingViewService';

export declare class ListingViewController {
	private listingViewService: ListingViewService;

	constructor(listingViewService: ListingViewService);

	recordView(ctx: Context): Promise<void>;
	getViewsCount(ctx: Context): Promise<void>;
}
