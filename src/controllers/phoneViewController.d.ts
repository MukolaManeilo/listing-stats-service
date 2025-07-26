import { Context } from 'koa';
import { PhoneViewService } from '../services/phoneViewService';

export declare class PhoneViewController {
	private phoneViewService: PhoneViewService;

	constructor(phoneViewService: PhoneViewService);

	recordView(ctx: Context): Promise<void>;
	getViewsCount(ctx: Context): Promise<void>;
}
