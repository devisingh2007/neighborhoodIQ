const mongoose = require('mongoose');

const areaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide an area name'],
    trim: true,
    index: true
  },
  city: {
    type: String,
    required: [true, 'Please provide a city'],
    trim: true,
    index: true
  },
  state: {
    type: String,
    required: [true, 'Please provide a state'],
    trim: true
  },
  country: {
    type: String,
    default: 'India'
  },
  zipCode: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  type: {
    type: String,
    enum: ['residential', 'commercial', 'mixed', 'industrial'],
    default: 'residential'
  },
  population: Number,
  medianIncome: String,
  price: String, // e.g. "₹12.5K"
  growth: String, // e.g. "+ 9.2%"
  trend: {
    type: String,
    enum: ['Rising', 'Stable', 'Declining'],
    default: 'Stable'
  },
  tags: [String],
  description: String,
  images: [String],
  overallScore: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// GeoJSON index
areaSchema.index({ location: '2dsphere' });

// Text index for search
areaSchema.index({ name: 'text', city: 'text' });

// Virtual for score ref
areaSchema.virtual('scores', {
  ref: 'NeighborhoodScore',
  localField: '_id',
  foreignField: 'area',
  justOne: true
});

module.exports = mongoose.model('Area', areaSchema);
