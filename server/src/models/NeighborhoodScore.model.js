const mongoose = require('mongoose');

const neighborhoodScoreSchema = new mongoose.Schema({
  area: {
    type: mongoose.Schema.ObjectId,
    ref: 'Area',
    required: true,
    unique: true
  },
  overallScore: {
    type: Number,
    required: true,
    min: 0,
    max: 10
  },
  safetyScore: { type: Number, default: 0 },
  airQualityScore: { type: Number, default: 0 },
  healthcareScore: { type: Number, default: 0 },
  educationScore: { type: Number, default: 0 },
  infrastructureScore: { type: Number, default: 0 },
  waterScore: { type: Number, default: 0 },
  walkabilityScore: { type: Number, default: 0 },
  grade: {
    type: String,
    enum: ['A+', 'A', 'B', 'C', 'D'],
    default: 'B'
  },
  calculatedAt: {
    type: Date,
    default: Date.now
  },
  dataVersion: {
    type: String,
    default: '1.0'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('NeighborhoodScore', neighborhoodScoreSchema);
