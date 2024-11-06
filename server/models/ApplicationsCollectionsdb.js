const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,
  },
  seekerId: {
    type: String,
    required: true,
  },
  providerId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'done'],  
    default: 'pending',
  },
  appliedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  reviewDate: {
    type: Date,
    default: null,
  },
});

const Application = mongoose.model('application', applicationSchema);

module.exports = Application;
