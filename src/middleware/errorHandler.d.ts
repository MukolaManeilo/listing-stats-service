import { Context, Next } from 'koa';

export declare function errorHandler(ctx: Context, next: Next): Promise<void>;
export declare function handleSpecificError(error: Error): {
	status: number;
	body: {
		error: string;
		message: string;
		timestamp: string;
	};
}; 