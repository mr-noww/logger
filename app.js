const logger = require('./logger');

// Log messages for all log levels
logger.error('This is an error message.');
logger.warn('This is a warning message.');
logger.info('This is an informational message.');
logger.http('This is an HTTP message.');
logger.verbose('This is a verbose message.');
logger.debug('This is a debug message.');
logger.silly('This is a silly message.');

// Close the logger
logger.end();
