import BaseRepository from './baseRepository.js';
import StatisticEvent from '../models/statisticEvent.js';

class ListingViewRepository extends BaseRepository {
	async recordListingView(autoId) {
		const event = StatisticEvent.createListingView(autoId);

		return await this.withTransaction(async (client) => {
			await client.query(
				'INSERT INTO events (auto_id, event_type) VALUES ($1, $2)',
				[event.autoId, event.eventType]
			);

			await client.query(`
                INSERT INTO statistics (auto_id, listing_views)
                VALUES ($1, 1)
                    ON CONFLICT (auto_id) 
        			DO UPDATE SET
                    listing_views = statistics.listing_views + 1,
                                   updated_at = CURRENT_TIMESTAMP
			`, [event.autoId]);

			return event;
		});
	}

	async getListingViewsCount(autoId) {
		const result = await this.query(
			'SELECT listing_views FROM statistics WHERE auto_id = $1',
			[autoId]
		);

		return result.rows.length > 0 ? result.rows[0].listing_views : 0;
	}
}

export default ListingViewRepository;

