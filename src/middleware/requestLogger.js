const logger = require('../config/logger');

const requestLogger = (req, res, next) => {
  const start = process.hrtime.bigint();

  res.on('finish', () => {
    const diff = Number(process.hrtime.bigint() - start) / 1e6;
    const responseTimeMs = Math.round(diff * 1000) / 1000;

    logger.info({
      message: 'HTTP request completed',
      method: req.method,
      route: req.originalUrl,
      responseTimeMs
    });
  });

  next();
};

module.exports = requestLogger;
