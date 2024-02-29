const winston = require('winston');

// Define Winston transport for logging to a file
const fileTransport = new winston.transports.File({ filename: 'app.log' });

// Create a logger instance
const logger = winston.createLogger({
    level: 'silly', // Set logging level
    format: winston.format.combine(
        winston.format.timestamp(), // Add timestamp to logs
        winston.format.printf(info => `${info.timestamp} [${info.level.toUpperCase()}] - ${info.message}`) // Customize log format
    ),
    transports: [fileTransport] // Log to file
});

// Export the logger instance
module.exports = logger;
