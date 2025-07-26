import { Context } from 'koa';
import { StatisticsService } from '../services/statisticsService';

export declare class StatisticsController {
	private statisticsService: StatisticsService;

	constructor(statisticsService: StatisticsService);

	getStatistics(ctx: Context): Promise<void>;
	getAllStatistics(ctx: Context): Promise<void>;
	getTopStatistics(ctx: Context): Promise<void>;
}