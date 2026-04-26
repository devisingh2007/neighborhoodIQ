const dotenv = require('dotenv');
const path = require('path');

// Load env vars
dotenv.config({ path: path.join(__dirname, '../../.env') });

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  mongoose: {
    url: process.env.MONGODB_URI,
    options: {}
  },
  redis: {
    url: process.env.REDIS_URL
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
  },
  apiKeys: {
    openAQ: process.env.OPENAQ_API_KEY,
    fbi: process.env.FBI_API_KEY,
    googlePlaces: process.env.GOOGLE_PLACES_API_KEY,
    mapbox: process.env.MAPBOX_ACCESS_TOKEN,
    walkScore: process.env.WALK_SCORE_API_KEY,
    openWeather: process.env.OPENWEATHER_API_KEY
  }
};

// Validate required variables
const requiredVars = ['MONGODB_URI', 'JWT_SECRET'];
requiredVars.forEach((v) => {
  if (!process.env[v]) {
    console.error(`ERROR: Missing required environment variable: ${v}`);
    if (config.env === 'production') process.exit(1);
  }
});

module.exports = config;
