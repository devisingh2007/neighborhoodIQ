const mongoose = require('mongoose');

const aqiDataSchema = new mongoose.Schema({
  area: {
    type: mongoose.Schema.ObjectId,
    ref: 'Area',
    required: true
  },
  aqi: {
    type: Number,
    required: true
  },
  pm25: Number,
  pm10: Number,
  o3: Number,
  no2: Number,
  so2: Number,
  co: Number,
  dominantPollutant: String,
  category: {
    type: String,
    enum: ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous'],
    required: true
  },
  recordedAt: {
    type: Date,
    default: Date.now
  },
  source: {
    type: String,
    default: 'OpenAQ'
  }
}, {
  timestamps: true
});

// Index for latest records
aqiDataSchema.index({ area: 1, recordedAt: -1 });

module.exports = mongoose.model('AQIData', aqiDataSchema);
