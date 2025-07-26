import { BaseRepository } from './baseRepository';
import { StatisticEvent } from '../models/statisticEvent';

export interface ListingViewHistoryEntry {
	auto_id: string;
	created_at: Date;
}

export declare class ListingViewRepository extends BaseRepository {
	recordListingView(autoId: string): Promise<StatisticEvent>;
	getListingViewsCount(autoId: string): Promise<number>;
}