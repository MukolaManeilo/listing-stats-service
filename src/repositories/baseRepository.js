import pool from '../database/connection.js';

class BaseRepository {
	async withTransaction(callback) {
		const client = await pool.connect();

		try {
			await client.query('BEGIN');
			const result = await callback(client);
			await client.query('COMMIT');
			return result;
		} catch (error) {
			await client.query('ROLLBACK');
			throw error;
		} finally {
			client.release();
		}
	}

	async query(text, params) {
		return await pool.query(text, params);
	}
}

export default BaseRepository;