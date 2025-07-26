import { PhoneViewRepository, PhoneViewHistoryEntry } from '../repositories/phoneViewRepository';
import { StatisticEvent } from '../models/statisticEvent';

export declare class PhoneViewService {
	private phoneViewRepository: PhoneViewRepository;

	constructor(phoneViewRepository: PhoneViewRepository);

	recordPhoneView(autoId: string): Promise<StatisticEvent>;
	getPhoneViewsCount(autoId: string): Promise<number>;
	getPhoneViewsHistory(autoId: string, limit?: number): Promise<PhoneViewHistoryEntry[]>;
}

