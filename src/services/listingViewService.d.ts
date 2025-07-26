import { ListingViewRepository, ListingViewHistoryEntry } from '../repositories/listingViewRepository';
import { StatisticEvent } from '../models/statisticEvent';

export declare class ListingViewService {
	private listingViewRepository: ListingViewRepository;

	constructor(listingViewRepository: ListingViewRepository);

	recordListingView(autoId: string): Promise<StatisticEvent>;
	getListingViewsCount(autoId: string): Promise<number>;
	getListingViewsHistory(autoId: string, limit?: number): Promise<ListingViewHistoryEntry[]>;
}
