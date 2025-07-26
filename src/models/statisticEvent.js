class StatisticEvent {
	constructor(autoId, eventType, timestamp = new Date()) {
		this.autoId = autoId;
		this.eventType = eventType;
		this.timestamp = timestamp;
	}

	static createListingView(autoId) {
		return new StatisticEvent(autoId, 'listing_view');
	}

	static createPhoneView(autoId) {
		return new StatisticEvent(autoId, 'phone_view');
	}

	isListingView() {
		return this.eventType === 'listing_view';
	}

	isPhoneView() {
		return this.eventType === 'phone_view';
	}
}

export default StatisticEvent;