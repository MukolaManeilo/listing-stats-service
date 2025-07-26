export interface AggregatedStatisticsData {
	autoId: string;
	listingViews: number;
	phoneViews: number;
	lastUpdated: Date;
}

export interface AggregatedStatisticsJSON {
	autoId: string;
	listingViews: number;
	phoneViews: number;
	totalViews: number;
	lastUpdated: Date;
}

export declare class AggregatedStatistics {
	autoId: string;
	listingViews: number;
	phoneViews: number;
	lastUpdated: Date;

	constructor(autoId: string, listingViews?: number, phoneViews?: number, lastUpdated?: Date);

	getTotalViews(): number;
	getConversionRate(): number;
	incrementListingViews(): void;
	incrementPhoneViews(): void;
	toJSON(): AggregatedStatisticsJSON;
}
