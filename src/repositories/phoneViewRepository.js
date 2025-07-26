import BaseRepository from './baseRepository.js';
import StatisticEvent from '../models/statisticEvent.js';

class PhoneViewRepository extends BaseRepository {
	async recordPhoneView(autoId) {
		const event = StatisticEvent.createPhoneView(autoId);

		return await this.withTransaction(async (client) => {
			await client.query(
				'INSERT INTO events (auto_id, event_type) VALUES ($1, $2)',
				[event.autoId, event.eventType]
			);

			await client.query(`
        		INSERT INTO statistics (auto_id, phone_views)
        		VALUES ($1, 1)
        		ON CONFLICT (auto_id) 
        		DO UPDATE SET 
          		phone_views = statistics.phone_views + 1,
          		updated_at = CURRENT_TIMESTAMP
      		`, [event.autoId]);

			return event;
		});
	}

	async getPhoneViewsCount(autoId) {
		const result = await this.query(
			'SELECT phone_views FROM statistics WHERE auto_id = $1',
			[autoId]
		);

		return result.rows.length > 0 ? result.rows[0].phone_views : 0;
	}
}

export default PhoneViewRepository;
