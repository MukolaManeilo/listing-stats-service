import { Pool } from 'pg';
import databaseConfig from '../config/database.js';
import { DatabaseConnectionError } from '../types/errorTypes.js';

const pool = new Pool(databaseConfig);

pool.on('error', (err) => {
	console.error('Unexpected error on idle client', err);
	throw new DatabaseConnectionError(`Database connection error: ${err.message}`);
});

export default pool; 