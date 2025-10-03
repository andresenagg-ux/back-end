const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  levels: {
    error: 0,
    warn: 1,
    info: 2
  },
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    new transports.Console()
  ]
});

module.exports = logger;
