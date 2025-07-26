import { InvalidAutoIdError, InvalidLimitError } from '../types/errorTypes.js';

class ListingViewService {
	constructor(listingViewRepository) {
		this.listingViewRepository = listingViewRepository;
	}

	async recordListingView(autoId) {
		if (!autoId || typeof autoId !== 'string' || autoId.trim().length === 0) {
			throw new InvalidAutoIdError('Invalid autoId provided');
		}

		return await this.listingViewRepository.recordListingView(autoId.trim());
	}

	async getListingViewsCount(autoId) {
		if (!autoId || typeof autoId !== 'string') {
			throw new InvalidAutoIdError('Invalid autoId provided');
		}

		return await this.listingViewRepository.getListingViewsCount(autoId.trim());
	}

	async getListingViewsHistory(autoId, limit = 100) {
		if (!autoId || typeof autoId !== 'string') {
			throw new InvalidAutoIdError('Invalid autoId provided');
		}

		if (limit > 1000) {
			throw new InvalidLimitError('Limit cannot exceed 1000');
		}

		return await this.listingViewRepository.getListingViewsHistory(autoId.trim(), limit);
	}
}

export default ListingViewService;