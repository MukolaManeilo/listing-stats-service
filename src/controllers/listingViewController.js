class ListingViewController {
	constructor(listingViewService) {
		this.listingViewService = listingViewService;
	}

	async recordView(ctx) {
		const event = await this.listingViewService.recordListingView(ctx.validatedData.autoId);

		ctx.status = 201;
		ctx.body = {
			message: 'Listing view recorded successfully',
			data: {
				autoId: event.autoId,
				eventType: event.eventType,
				timestamp: event.timestamp
			}
		};
	}

	async getViewsCount(ctx) {
		const count = await this.listingViewService.getListingViewsCount(ctx.params.autoId);

		ctx.body = {
			data: {
				autoId: ctx.params.autoId,
				listingViews: count
			}
		};
	}
}

export default ListingViewController;
