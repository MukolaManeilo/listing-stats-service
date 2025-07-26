import pool from '../database/connection.js';

const createTables = async () => {
	const client = await pool.connect();

	try {
		await client.query('BEGIN');

		await client.query(`
      CREATE TABLE IF NOT EXISTS statistics (
        auto_id VARCHAR(255) PRIMARY KEY,
        listing_views INTEGER NOT NULL DEFAULT 0,
        phone_views INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

		await client.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        auto_id VARCHAR(255) NOT NULL,
        event_type VARCHAR(50) NOT NULL CHECK (event_type IN ('listing_view', 'phone_view')),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

		await client.query(`
      CREATE INDEX IF NOT EXISTS idx_events_auto_id 
      ON events(auto_id)
    `);

		await client.query(`
      CREATE INDEX IF NOT EXISTS idx_events_created_at 
      ON events(created_at)
    `);

		await client.query('COMMIT');
		console.log('Database tables created successfully');
	} catch (error) {
		await client.query('ROLLBACK');
		console.error('Error creating tables:', error);
		throw error;
	} finally {
		client.release();
	}
};

export { createTables };