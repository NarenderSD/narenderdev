// Custom error handler for production
export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Database connection error
export class DatabaseError extends AppError {
  constructor(message: string = 'Database connection failed') {
    super(message, 500);
  }
}

// Authentication error
export class AuthError extends AppError {
  constructor(message: string = 'Authentication failed') {
    super(message, 401);
  }
}

// Validation error
export class ValidationError extends AppError {
  constructor(message: string = 'Validation failed') {
    super(message, 400);
  }
}

// API response helper
export function apiResponse(success: boolean, data?: Record<string, unknown>, error?: string, statusCode: number = 200) {
  return {
    success,
    ...(data && { data }),
    ...(error && { error }),
    timestamp: new Date().toISOString(),
    status: statusCode
  };
}

// Error logger (you can integrate with services like Sentry)
export function logError(error: Error, context?: string) {
  if (process.env.NODE_ENV === 'production') {
    console.error(`[${new Date().toISOString()}] ${context || 'Error'}:`, {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
  } else {
    console.error(error);
  }
}
