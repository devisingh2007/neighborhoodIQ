const config = require('./env');

const corsOptions = {
  origin: config.env === 'development' 
    ? 'http://localhost:5173' // Default Vite port
    : process.env.FRONTEND_URL, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = corsOptions;
