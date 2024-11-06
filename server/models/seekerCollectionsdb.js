const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/  // Simple email format validation
  },
  password: {
    type: String,
    required: true,
    minlength: 6  // Example validation for password length
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/  // Simple regex to ensure phone is 10 digits
  },
  appliedJobs: [{
    type: String,
    required: false
  }],
  address: {
    type: String,  // You had "Address" as an array; changing to a single field
    required: true
  },
  city: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });  // Automatically adds 'createdAt' and 'updatedAt'

// Create the model
const Seeker = mongoose.model('Seeker', applicantSchema);

module.exports = Seeker;
