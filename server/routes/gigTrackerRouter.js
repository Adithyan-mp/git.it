const express = require('express');
const Applicationdb = require('../models/ApplicationsCollectionsdb'); 
const JobCollectionsdb = require("../models/jobCollectionsdb");
const router = express.Router();

// Fetching status of applications
router.get('/status', async (req, res) => {
  const { userid } = req.query; 

  try {
    // Fetch pending and approved job applications
    const pendingApplications = await Applicationdb.find({ seekerId: userid, status: 'pending' });
    const approvedApplications = await Applicationdb.find({ seekerId: userid, status: 'approved' });

    // Extract job IDs from applications
    const pendingJobIds = pendingApplications.map(app => app.jobId);
    const approvedJobIds = approvedApplications.map(app => app.jobId);

    // Fetch job details based on job IDs
    const pendingJobs = await JobCollectionsdb.find({ jobId: { $in: pendingJobIds } });
    const approvedJobs = await JobCollectionsdb.find({ jobId: { $in: approvedJobIds } });

    // Format the job details into the desired structure
    const formattedPendingJobs = pendingJobs.map(job => ({
      id: job._id, // Correctly reference the Mongoose _id
      jobId: job.jobId, // Make sure this property exists in your schema
      title: job.title,
      company: job.company,
      shift: job.shift,
      duration: job.duration,
      pay: job.pay,
      time: job.time,
      role: job.role,
      description: job.description,
      imageUrl: job.imageUrl,
      type: job.type,
      location: job.location,
    }));

    const formattedApprovedJobs = approvedJobs.map(job => ({
      id: job._id, // Correctly reference the Mongoose _id
      jobId: job.jobId, // Make sure this property exists in your schema
      title: job.title,
      company: job.company,
      shift: job.shift,
      duration: job.duration,
      pay: job.pay,
      time: job.time,
      role: job.role,
      description: job.description,
      imageUrl: job.imageUrl,
      type: job.type,
      location: job.location,
    }));

    // Respond with formatted pending and approved job details
    res.json({ pendingJobs: formattedPendingJobs, approvedJobs: formattedApprovedJobs });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Fetching application history
router.get('/history', async (req, res) => {
  const { userid } = req.query;

  try {
    // Fetch application history for the user with statuses "done" and "rejected"
    const history = await Applicationdb.find({
      seekerId: userid,
      status: { $in: ["done", "rejected"] }
    });

    // Extract job IDs from applications
    const jobIds = history.map(app => app.jobId);
    
    // Fetch job details based on job IDs
    const jobs = await JobCollectionsdb.find({ jobId: { $in: jobIds } }); // Change to jobId for consistency

    // Format the job details into the desired structure
    const formattedHistory = history.map(app => {
      const job = jobs.find(job => job.jobId === app.jobId); // Ensure this matches your schema
      return {
        title: job.title,
        company: job.company,
        address: job.location, // Assuming the address is the location
        amount: job.pay, // Assuming amount corresponds to pay
        date: app.date, // Assuming you have a date field in the application document
        status: app.status
      };
    });

    // Respond with the formatted history
    res.json({ history: formattedHistory });
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Cancel application
router.delete('/applicationscancel/:jobId', async (req, res) => {
  // console.log('hi')
  const { jobId } = req.params;
  const { userId } = req.body;
  // console.log(jobId)
  // console.log(userId) // This will now have the userId

  try {
    // First, find the application to return its details before deleting it
    const application = await Applicationdb.findOne({ jobId, seekerId: userId }); // Use seekerId for clarity

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Then, delete the application
    await Applicationdb.findOneAndDelete({jobId: jobId, seekerId: userId }); // Use seekerId for clarity

    res.status(200).json({ message: 'Application cancelled', application });
  } catch (error) {
    console.error('Error cancelling application:', error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
