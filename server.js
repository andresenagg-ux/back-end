const express = require('express');
const logger = require('./src/config/logger');
const requestLogger = require('./src/middleware/requestLogger');

const app = express();

app.use(express.json());
app.use(requestLogger);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info({ message: `Server listening on port ${PORT}` });
});
