import {
	InputValidationError,
	SchemaValidationError,
	BadDataError,
	NotFoundError,
	StatisticsNotFoundError,
	InvalidAutoIdError,
	InvalidLimitError,
	InternalServerError,
	DatabaseConnectionError,
	DatabaseUpdatingError,
	DatabaseQueryError,
	ValidationError,
	UnknownError,
	EnvironmentVariableError,
	StartUpError,
	TestingError
} from '../types/errorTypes.js';

/**
 * Centralized error handler middleware
 * @param {Object} ctx - Koa context
 * @param {Function} next - Next middleware function
 */
const errorHandler = async (ctx, next) => {
	try {
		await next();
	} catch (error) {
		console.error('Error caught in error handler:', error);

		if (error instanceof InputValidationError ||
			error instanceof SchemaValidationError ||
			error instanceof BadDataError ||
			error instanceof NotFoundError ||
			error instanceof StatisticsNotFoundError ||
			error instanceof InvalidAutoIdError ||
			error instanceof InvalidLimitError ||
			error instanceof InternalServerError ||
			error instanceof DatabaseConnectionError ||
			error instanceof DatabaseUpdatingError ||
			error instanceof DatabaseQueryError ||
			error instanceof ValidationError ||
			error instanceof UnknownError ||
			error instanceof EnvironmentVariableError) {
			
			ctx.status = error.statusCode || 500;
			ctx.body = {
				error: error.name,
				message: error.message,
				timestamp: new Date().toISOString()
			};
			return;
		}

		if (error instanceof StartUpError || error instanceof TestingError) {
			ctx.status = 500;
			ctx.body = {
				error: error.name,
				message: error.message,
				timestamp: new Date().toISOString()
			};
			return;
		}

		if (error.isJoi) {
			ctx.status = 400;
			ctx.body = {
				error: 'ValidationError',
				message: 'Schema validation failed',
				details: error.details.map(detail => detail.message),
				timestamp: new Date().toISOString()
			};
			return;
		}

		if (error.code) {
			switch (error.code) {
				case 'ER_DUP_ENTRY':
					ctx.status = 409;
					ctx.body = {
						error: 'DuplicateEntryError',
						message: 'Resource already exists',
						timestamp: new Date().toISOString()
					};
					return;
				case 'ER_NO_REFERENCED_ROW_2':
					ctx.status = 400;
					ctx.body = {
						error: 'ForeignKeyError',
						message: 'Referenced resource does not exist',
						timestamp: new Date().toISOString()
					};
					return;
				case 'ECONNREFUSED':
				case 'ENOTFOUND':
					ctx.status = 503;
					ctx.body = {
						error: 'DatabaseConnectionError',
						message: 'Database connection failed',
						timestamp: new Date().toISOString()
					};
					return;
			}
		}

		if (error.status) {
			ctx.status = error.status;
			ctx.body = {
				error: 'HTTPError',
				message: error.message || 'HTTP error occurred',
				timestamp: new Date().toISOString()
			};
			return;
		}

		ctx.status = 500;
		ctx.body = {
			error: 'InternalServerError',
			message: process.env.NODE_ENV === 'production' 
				? 'An internal server error occurred' 
				: error.message,
			timestamp: new Date().toISOString()
		};
	}
};

/**
 * Error handler for specific error types
 * @param {Error} error - The error to handle
 * @returns {Object} - Error response object
 */
const handleSpecificError = (error) => {
	if (error instanceof InputValidationError) {
		return {
			status: 422,
			body: {
				error: 'InputValidationError',
				message: error.message,
				timestamp: new Date().toISOString()
			}
		};
	}

	if (error instanceof SchemaValidationError) {
		return {
			status: 400,
			body: {
				error: 'SchemaValidationError',
				message: error.message,
				timestamp: new Date().toISOString()
			}
		};
	}

	if (error instanceof NotFoundError || error instanceof StatisticsNotFoundError) {
		return {
			status: 404,
			body: {
				error: error.name,
				message: error.message,
				timestamp: new Date().toISOString()
			}
		};
	}

	if (error instanceof DatabaseConnectionError || 
		error instanceof DatabaseUpdatingError || 
		error instanceof DatabaseQueryError) {
		return {
			status: 500,
			body: {
				error: error.name,
				message: error.message,
				timestamp: new Date().toISOString()
			}
		};
	}

	return {
		status: 500,
		body: {
			error: 'InternalServerError',
			message: 'An internal server error occurred',
			timestamp: new Date().toISOString()
		}
	};
};

export { errorHandler, handleSpecificError }; 