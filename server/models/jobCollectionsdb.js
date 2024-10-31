
const mongoose = require('mongoose');
require('dotenv').config();

const jobSchema = new mongoose.Schema({
  jobId: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  shift: { type: String, required: true },
  duration: { type: String, required: true },
  pay: { type: String, required: true },
  time: { type: String, required: true },
  role: { type: String, required: true },
  vacancy:{ type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, default:process.env.PROF_PIC },
  type: { type: String, required: true },
  location: { type: String, required: true },
  providerId: { type: String, required: true },
  lastdate: { type: Date, required: true }, // New lastDate field
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Model creation
const JobCollection = mongoose.model('jobcollections', jobSchema);

module.exports = JobCollection;
