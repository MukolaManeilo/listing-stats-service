import { Context, Next } from 'koa';

export interface ValidationError {
	error: string;
	details: string[];
}

export interface PaginationParams {
	limit: number;
	offset: number;
}

export interface TopStatisticsParams {
	limit: number;
	orderBy: 'total_views' | 'listing_views' | 'phone_views';
}

declare module 'koa' {
	interface BaseContext {
		validatedData?: any;
		paginationParams?: PaginationParams;
		topStatisticsParams?: TopStatisticsParams;
	}
}

export declare function validateListingView(ctx: Context, next: Next): Promise<void>;
export declare function validatePhoneView(ctx: Context, next: Next): Promise<void>;
export declare function validateAutoId(ctx: Context, next: Next): Promise<void>;
export declare function validatePagination(ctx: Context, next: Next): Promise<void>;
export declare function validateTopStatistics(ctx: Context, next: Next): Promise<void>;
