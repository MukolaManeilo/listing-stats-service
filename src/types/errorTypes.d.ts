export interface ICustomError extends Error {
	statusCode?: number;
}

export const defaultErrorMessage: {
	InputValidationError: string;
	SchemaValidationError: string;
	BadDataError: string;
	NotFoundError: string;
	InternalServerError: string;
	DatabaseConnectionError: string;
	DatabaseUpdatingError: string;
	DatabaseQueryError: string;
	StatisticsNotFoundError: string;
	InvalidAutoIdError: string;
	InvalidLimitError: string;
	ValidationError: string;
	UnknownError: string;
	EnvironmentVariableError: string;
	StartUpError: string;
	TestingError: string;
};

export class InputValidationError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class SchemaValidationError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class BadDataError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class NotFoundError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class StatisticsNotFoundError extends Error {
	readonly statusCode: number;
	constructor(autoId?: string);
}

export class InvalidAutoIdError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class InvalidLimitError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class InternalServerError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class DatabaseConnectionError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class DatabaseUpdatingError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class DatabaseQueryError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class ValidationError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class UnknownError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class EnvironmentVariableError extends Error {
	readonly statusCode: number;
	constructor(message?: string);
}

export class StartUpError extends Error {
	constructor(message?: string);
}

export class TestingError extends Error {
	constructor(message?: string);
} 