const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  area: {
    type: mongoose.Schema.ObjectId,
    ref: 'Area',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  title: {
    type: String,
    required: [true, 'Please add a title for the review'],
    maxlength: 100
  },
  content: {
    type: String,
    required: [true, 'Please add some content'],
    maxlength: 1000
  },
  pros: [String],
  cons: [String],
  images: [String],
  helpfulCount: {
    type: Number,
    default: 0
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isApproved: {
    type: Boolean,
    default: true // Simple for now
  }
}, {
  timestamps: true
});

// One review per user per area
reviewSchema.index({ user: 1, area: 1 }, { unique: true });

module.exports = mongoose.model('Review', reviewSchema);
