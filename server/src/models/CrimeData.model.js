const mongoose = require('mongoose');

const crimeDataSchema = new mongoose.Schema({
  area: {
    type: mongoose.Schema.ObjectId,
    ref: 'Area',
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  month: Number,
  totalIncidents: {
    type: Number,
    required: true
  },
  violentCrime: Number,
  propertyCrime: Number,
  crimeRate: {
    type: Number, // per 100k population
    required: true
  },
  breakdown: {
    type: Map,
    of: Number
  },
  source: {
    type: String,
    default: 'Official Records'
  },
  fetchedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for quick lookup by area and year
crimeDataSchema.index({ area: 1, year: -1 });

module.exports = mongoose.model('CrimeData', crimeDataSchema);
