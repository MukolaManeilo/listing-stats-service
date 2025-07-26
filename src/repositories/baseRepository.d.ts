import { PoolClient, QueryResult } from 'pg';

export declare class BaseRepository {
	withTransaction<T>(callback: (client: PoolClient) => Promise<T>): Promise<T>;
	query(text: string, params?: any[]): Promise<QueryResult>;
}