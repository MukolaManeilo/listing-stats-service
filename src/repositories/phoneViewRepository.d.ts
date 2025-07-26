import { BaseRepository } from './baseRepository';
import { StatisticEvent } from '../models/statisticEvent';

export interface PhoneViewHistoryEntry {
  auto_id: string;
  created_at: Date;
}

export declare class PhoneViewRepository extends BaseRepository {
  recordPhoneView(autoId: string): Promise<StatisticEvent>;
  getPhoneViewsCount(autoId: string): Promise<number>;
}
