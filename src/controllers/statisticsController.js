class StatisticsController {
	constructor(statisticsService) {
		this.statisticsService = statisticsService;
	}

	async getStatistics(ctx) {
		const statistics = await this.statisticsService.getStatisticsByAutoId(ctx.params.autoId);
		ctx.body = { data: statistics.toJSON() };
	}

	async getAllStatistics(ctx) {
		const statistics = await this.statisticsService.getAllStatistics(
			ctx.paginationParams.limit,
			ctx.paginationParams.offset
		);

		ctx.body = {
			data: statistics.map(stat => stat.toJSON()),
			pagination: {
				limit: ctx.paginationParams.limit,
				offset: ctx.paginationParams.offset,
				count: statistics.length
			}
		};
	}

	async getTopStatistics(ctx) {
		const statistics = await this.statisticsService.getTopStatistics(
			ctx.topStatisticsParams.limit,
			ctx.topStatisticsParams.orderBy
		);

		ctx.body = {
			data: statistics.map(stat => stat.toJSON()),
			params: {
				limit: ctx.topStatisticsParams.limit,
				orderBy: ctx.topStatisticsParams.orderBy
			}
		};
	}
}

export default StatisticsController;