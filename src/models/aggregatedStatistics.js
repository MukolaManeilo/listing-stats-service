class AggregatedStatistics {
	constructor(autoId, listingViews = 0, phoneViews = 0, lastUpdated = new Date()) {
		this.autoId = autoId;
		this.listingViews = listingViews;
		this.phoneViews = phoneViews;
		this.lastUpdated = lastUpdated;
	}

	getTotalViews() {
		return this.listingViews + this.phoneViews;
	}

	incrementListingViews() {
		this.listingViews += 1;
		this.lastUpdated = new Date();
	}

	incrementPhoneViews() {
		this.phoneViews += 1;
		this.lastUpdated = new Date();
	}

	toJSON() {
		return {
			autoId: this.autoId,
			listingViews: this.listingViews,
			phoneViews: this.phoneViews,
			totalViews: this.getTotalViews(),
			lastUpdated: this.lastUpdated
		};
	}
}

export default AggregatedStatistics;
