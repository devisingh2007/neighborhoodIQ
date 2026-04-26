const mongoose = require('mongoose');

const savedAreaSchema = new mongoose.Schema({
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
  notes: String
}, {
  timestamps: true
});

// Compound unique index to prevent duplicate saves
savedAreaSchema.index({ user: 1, area: 1 }, { unique: true });

module.exports = mongoose.model('SavedArea', savedAreaSchema);
