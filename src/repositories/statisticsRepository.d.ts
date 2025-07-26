import { BaseRepository } from './baseRepository';
import { AggregatedStatistics } from '../models/aggregatedStatistics';

export type StatisticsOrderBy = 'total_views' | 'listing_views' | 'phone_views';

export declare class StatisticsRepository extends BaseRepository {
	getStatistics(autoId: string): Promise<AggregatedStatistics | null>;
	getAllStatistics(limit?: number, offset?: number): Promise<AggregatedStatistics[]>;
	getTopStatistics(limit?: number, orderBy?: StatisticsOrderBy): Promise<AggregatedStatistics[]>;
}
