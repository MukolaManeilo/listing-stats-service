import { StatisticsNotFoundError, InvalidAutoIdError, InvalidLimitError, ValidationError } from '../types/errorTypes.js';

class StatisticsService {
	constructor(statisticsRepository) {
		this.statisticsRepository = statisticsRepository;
	}

	async getStatisticsByAutoId(autoId) {
		if (!autoId || typeof autoId !== 'string') {
			throw new InvalidAutoIdError('Invalid autoId provided');
		}

		const statistics = await this.statisticsRepository.getStatistics(autoId.trim());
		
		if (!statistics) {
			throw new StatisticsNotFoundError(autoId);
		}

		return statistics;
	}

	async getAllStatistics(limit = 100, offset = 0) {
		if (limit > 1000) {
			throw new InvalidLimitError('Limit cannot exceed 1000');
		}

		if (offset < 0) {
			throw new InvalidLimitError('Offset cannot be negative');
		}

		return await this.statisticsRepository.getAllStatistics(limit, offset);
	}

	async getTopStatistics(limit = 10, orderBy = 'total_views') {
		const validOrderBy = ['total_views', 'listing_views', 'phone_views'];

		if (!validOrderBy.includes(orderBy)) {
			throw new ValidationError(`Invalid orderBy value. Must be one of: ${validOrderBy.join(', ')}`);
		}

		if (limit > 100) {
			throw new InvalidLimitError('Limit cannot exceed 100 for top statistics');
		}

		return await this.statisticsRepository.getTopStatistics(limit, orderBy);
	}
}

export default StatisticsService;
