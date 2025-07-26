import { InvalidAutoIdError, InvalidLimitError } from '../types/errorTypes.js';

class PhoneViewService {
	constructor(phoneViewRepository) {
		this.phoneViewRepository = phoneViewRepository;
	}

	async recordPhoneView(autoId) {
		if (!autoId || typeof autoId !== 'string' || autoId.trim().length === 0) {
			throw new InvalidAutoIdError('Invalid autoId provided');
		}

		return await this.phoneViewRepository.recordPhoneView(autoId.trim());
	}

	async getPhoneViewsCount(autoId) {
		if (!autoId || typeof autoId !== 'string') {
			throw new InvalidAutoIdError('Invalid autoId provided');
		}

		return await this.phoneViewRepository.getPhoneViewsCount(autoId.trim());
	}

	async getPhoneViewsHistory(autoId, limit = 100) {
		if (!autoId || typeof autoId !== 'string') {
			throw new InvalidAutoIdError('Invalid autoId provided');
		}

		if (limit > 1000) {
			throw new InvalidLimitError('Limit cannot exceed 1000');
		}

		return await this.phoneViewRepository.getPhoneViewsHistory(autoId.trim(), limit);
	}
}

export default PhoneViewService;