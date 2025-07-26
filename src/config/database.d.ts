export interface DatabaseConfig {
	host: string;
	port: number;
	database: string;
	user: string;
	password: string;
	max: number;
	idleTimeoutMillis: number;
	connectionTimeoutMillis: number;
}

declare const databaseConfig: DatabaseConfig;
export default databaseConfig;