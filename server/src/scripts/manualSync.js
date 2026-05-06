const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Area = require('../models/Area.model');
const syncAllAreas = require('../jobs/syncAqi.job');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const manualSync = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB for manual sync...');

    // Run the sync job
    await syncAllAreas();

    console.log('Manual sync complete!');
    process.exit();
  } catch (err) {
    console.error('Sync failed:', err);
    process.exit(1);
  }
};

manualSync();
