export type EventType = 'listing_view' | 'phone_view';

export interface StatisticEventData {
	autoId: string;
	eventType: EventType;
	timestamp?: Date;
}

export declare class StatisticEvent {
	autoId: string;
	eventType: EventType;
	timestamp: Date;

	constructor(autoId: string, eventType: EventType, timestamp?: Date);

	static createListingView(autoId: string): StatisticEvent;
	static createPhoneView(autoId: string): StatisticEvent;

	isListingView(): boolean;
	isPhoneView(): boolean;
}