const app = require('./src/app');
const config = require('./src/config/env');
const connectDB = require('./src/config/db');
const { connectRedis } = require('./src/config/redis');
const initScheduler = require('./src/jobs/scheduler');
const logger = require('./src/config/logger');

const startServer = async () => {
  // Connect to Database
  await connectDB();

  // Connect to Redis (non-blocking in dev)
  await connectRedis();

  // Initialize Scheduler
  initScheduler();

  const server = app.listen(config.port, () => {
    logger.info(`Server running in ${config.env} mode on port ${config.port}`);
  });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err) => {
    logger.error('UNHANDLED REJECTION! 💥 Shutting down...');
    logger.error(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });

  // Handle graceful shutdown
  process.on('SIGTERM', () => {
    logger.info('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
      logger.info('💥 Process terminated!');
    });
  });
};

startServer();
