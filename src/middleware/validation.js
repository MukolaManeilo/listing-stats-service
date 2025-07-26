import Joi from 'joi';
import { SchemaValidationError, ValidationError } from '../types/errorTypes.js';

const listingViewSchema = Joi.object({
	autoId: Joi.string().required().min(1).max(255).trim()
});

const phoneViewSchema = Joi.object({
	autoId: Joi.string().required().min(1).max(255).trim()
});

const paginationSchema = Joi.object({
	limit: Joi.number().integer().min(1).max(1000).default(100),
	offset: Joi.number().integer().min(0).default(0)
});

const topStatisticsSchema = Joi.object({
	limit: Joi.number().integer().min(1).max(100).default(10),
	orderBy: Joi.string().valid('total_views', 'listing_views', 'phone_views').default('total_views')
});

const validateListingView = async (ctx, next) => {
	try {
		const { error, value } = listingViewSchema.validate(ctx.request.body);

		if (error) {
			throw new SchemaValidationError(error.details.map(detail => detail.message).join(', '));
		}

		ctx.validatedData = value;
		await next();
	} catch (err) {
		throw err;
	}
};

const validatePhoneView = async (ctx, next) => {
	try {
		const { error, value } = phoneViewSchema.validate(ctx.request.body);

		if (error) {
			throw new SchemaValidationError(error.details.map(detail => detail.message).join(', '));
		}

		ctx.validatedData = value;
		await next();
	} catch (err) {
		throw err;
	}
};

const validateAutoId = async (ctx, next) => {
	const autoId = ctx.params.autoId;

	if (!autoId || autoId.trim().length === 0) {
		throw new ValidationError('autoId parameter is required');
	}

	await next();
};

const validatePagination = async (ctx, next) => {
	try {
		const { error, value } = paginationSchema.validate(ctx.query);

		if (error) {
			throw new SchemaValidationError(error.details.map(detail => detail.message).join(', '));
		}

		ctx.paginationParams = value;
		await next();
	} catch (err) {
		throw err;
	}
};

const validateTopStatistics = async (ctx, next) => {
	try {
		const { error, value } = topStatisticsSchema.validate(ctx.query);

		if (error) {
			throw new SchemaValidationError(error.details.map(detail => detail.message).join(', '));
		}

		ctx.topStatisticsParams = value;
		await next();
	} catch (err) {
		throw err;
	}
};

export {
	validateListingView,
	validatePhoneView,
	validateAutoId,
	validatePagination,
	validateTopStatistics
};
