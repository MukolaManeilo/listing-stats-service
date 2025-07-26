import app from './app.js';
import appConfig from './config/app.js';

const server = app.listen(appConfig.port, () => {
	console.log(`Server running on port ${appConfig.port}`);
});

process.on('SIGTERM', () => {
	console.log('SIGTERM received. Shutting down gracefully...');
	server.close(() => {
		console.log('Server closed.');
		process.exit(0);
	});
});

export default server;