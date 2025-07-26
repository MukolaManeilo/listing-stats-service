export const defaultErrorMessage = {
	InputValidationError: 'Invalid input data provided',
	SchemaValidationError: 'Schema validation failed',
	BadDataError: 'Invalid or malformed data',
	NotFoundError: 'The requested resource was not found',
	InternalServerError: 'An internal server error occurred',
	DatabaseConnectionError: 'Failed to connect to the database',
	DatabaseUpdatingError: 'Failed to update the database',
	DatabaseQueryError: 'Failed to query the database',
	StatisticsNotFoundError: 'Statistics not found for the specified autoId',
	InvalidAutoIdError: 'Invalid autoId provided',
	InvalidLimitError: 'Invalid limit parameter provided',
	ValidationError: 'Validation error occurred',
	UnknownError: 'An unknown error occurred',
	EnvironmentVariableError: 'Environment variable is missing or invalid',
	StartUpError: 'Error occurred during application startup',
	TestingError: 'Error occurred during testing',
};

export class InputValidationError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.InputValidationError);
		this.name = 'InputValidationError';
		this.statusCode = 422;
	}
}

export class SchemaValidationError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.SchemaValidationError);
		this.name = 'SchemaValidationError';
		this.statusCode = 400;
	}
}

export class BadDataError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.BadDataError);
		this.name = 'BadDataError';
		this.statusCode = 400;
	}
}

export class NotFoundError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.NotFoundError);
		this.name = 'NotFoundError';
		this.statusCode = 404;
	}
}

export class StatisticsNotFoundError extends Error {
	constructor(autoId) {
		const message = autoId 
			? `No statistics found for autoId: ${autoId}`
			: defaultErrorMessage.StatisticsNotFoundError;
		super(message);
		this.name = 'StatisticsNotFoundError';
		this.statusCode = 404;
	}
}

export class InvalidAutoIdError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.InvalidAutoIdError);
		this.name = 'InvalidAutoIdError';
		this.statusCode = 400;
	}
}

export class InvalidLimitError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.InvalidLimitError);
		this.name = 'InvalidLimitError';
		this.statusCode = 400;
	}
}

export class InternalServerError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.InternalServerError);
		this.name = 'InternalServerError';
		this.statusCode = 500;
	}
}

export class DatabaseConnectionError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.DatabaseConnectionError);
		this.name = 'DatabaseConnectionError';
		this.statusCode = 500;
	}
}

export class DatabaseUpdatingError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.DatabaseUpdatingError);
		this.name = 'DatabaseUpdatingError';
		this.statusCode = 500;
	}
}

export class DatabaseQueryError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.DatabaseQueryError);
		this.name = 'DatabaseQueryError';
		this.statusCode = 500;
	}
}

export class ValidationError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.ValidationError);
		this.name = 'ValidationError';
		this.statusCode = 400;
	}
}

export class UnknownError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.UnknownError);
		this.name = 'UnknownError';
		this.statusCode = 500;
	}
}

export class EnvironmentVariableError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.EnvironmentVariableError);
		this.name = 'EnvironmentVariableError';
		this.statusCode = 500;
	}
}

export class StartUpError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.StartUpError);
		this.name = 'StartUpError';
	}
}

export class TestingError extends Error {
	constructor(message) {
		super(message || defaultErrorMessage.TestingError);
		this.name = 'TestingError';
	}
} 