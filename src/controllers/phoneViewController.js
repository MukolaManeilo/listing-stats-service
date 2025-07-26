class PhoneViewController {
	constructor(phoneViewService) {
		this.phoneViewService = phoneViewService;
	}

	async recordView(ctx) {
		const event = await this.phoneViewService.recordPhoneView(ctx.validatedData.autoId);

		ctx.status = 201;
		ctx.body = {
			message: 'Phone view recorded successfully',
			data: {
				autoId: event.autoId,
				eventType: event.eventType,
				timestamp: event.timestamp
			}
		};
	}

	async getViewsCount(ctx) {
		const count = await this.phoneViewService.getPhoneViewsCount(ctx.params.autoId);

		ctx.body = {
			data: {
				autoId: ctx.params.autoId,
				phoneViews: count
			}
		};
	}
}

export default PhoneViewController;
