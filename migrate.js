import { createTables } from './src/migrations/init.js';

createTables()
	.then(() => {
		console.log('Migration completed');
		process.exit(0);
	})
	.catch((error) => {
		console.error('Migration failed:', error);
		process.exit(1);
	}); 