import BaseRepository from './baseRepository.js';
import AggregatedStatistics from '../models/aggregatedStatistics.js';

export default class StatisticsRepository extends BaseRepository {
	async getStatistics(autoId) {
		const result = await this.query(
			'SELECT auto_id, listing_views, phone_views, updated_at FROM statistics WHERE auto_id = $1',
			[autoId]
		);

		if (result.rows.length === 0) {
			return null;
		}

		const row = result.rows[0];
		return new AggregatedStatistics(
			row.auto_id,
			row.listing_views,
			row.phone_views,
			row.updated_at
		);
	}

	async getAllStatistics(limit = 100, offset = 0) {
		const result = await this.query(
			'SELECT auto_id, listing_views, phone_views, updated_at FROM statistics ORDER BY updated_at DESC LIMIT $1 OFFSET $2',
			[limit, offset]
		);

		return result.rows.map(row => new AggregatedStatistics(
			row.auto_id,
			row.listing_views,
			row.phone_views,
			row.updated_at
		));
	}

	async getTopStatistics(limit = 10, orderBy = 'total_views') {
		let orderClause;
		switch (orderBy) {
			case 'listing_views':
				orderClause = 'listing_views DESC';
				break;
			case 'phone_views':
				orderClause = 'phone_views DESC';
				break;
			default:
				orderClause = '(listing_views + phone_views) DESC';
		}

		const result = await this.query(`
      		SELECT auto_id, listing_views, phone_views, updated_at 
      		FROM statistics 
      		WHERE listing_views > 0 OR phone_views > 0
      		ORDER BY ${orderClause}
      		LIMIT $1
    	`, [limit]);

		return result.rows.map(row => new AggregatedStatistics(
			row.auto_id,
			row.listing_views,
			row.phone_views,
			row.updated_at
		));
	}
}


