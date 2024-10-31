const express = require('express');
const JobCollection = require('../models/jobCollectionsdb');
const router = express.Router();
const Application = require('../models/ApplicationsCollectionsdb');
const Seeker = require('../models/seekerCollectionsdb');

// Handle GET request for job details with pagination, excluding applied jobs
router.get('/details', async (req, res) => {
    const { page = 1, limit = 10, userId } = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
    };

    try {
        const seeker = await Seeker.findById(userId);
        if (!seeker) return res.status(404).json({ message: 'Seeker not found' });

        const appliedJobIds = seeker.appliedJobs;

        // Fetch jobs excluding those in appliedJobs with pagination
        const jobs = await JobCollection.find({ jobId: { $nin: appliedJobIds } })
            .skip((options.page - 1) * options.limit)
            .limit(options.limit)
            .exec();

        const totalJobs = await JobCollection.countDocuments({ _id: { $nin: appliedJobIds } });

        res.json({
            totalJobs,
            totalPages: Math.ceil(totalJobs / options.limit),
            currentPage: options.page,
            jobs,
        });
    } catch (error) {
        console.error('Error fetching job details:', error.message);
        return res.status(500).json({ message: 'Failed to retrieve job details' });
    }
});

// Handle search request with pagination
router.get('/search', async (req, res) => {
    const searchTerm = req.query.searchTerm || '';
    const { page = 1, limit = 10 } = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
    };

    try {
        const jobs = await JobCollection.find({
            $or: [
                { title: { $regex: searchTerm, $options: 'i' } },
                { company: { $regex: searchTerm, $options: 'i' } },
                { role: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } },
                { type: { $regex: searchTerm, $options: 'i' } },
            ]
        })
        .skip((options.page - 1) * options.limit)
        .limit(options.limit)
        .exec();

        const totalJobs = await JobCollection.countDocuments({
            $or: [
                { title: { $regex: searchTerm, $options: 'i' } },
                { company: { $regex: searchTerm, $options: 'i' } },
                { role: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } },
                { type: { $regex: searchTerm, $options: 'i' } },
            ]
        });

        res.json({
            totalJobs,
            totalPages: Math.ceil(totalJobs / options.limit),
            currentPage: options.page,
            jobs,
        });
    } catch (error) {
        console.error('Error searching jobs:', error.message);
        return res.status(500).json({ message: 'Failed to search for jobs' });
    }
});

// Handle category-based filtering with pagination
router.get('/topCategories', async (req, res) => {
    const selectedCategory = req.query.selectedCategory || '';
    const { page = 1, limit = 10 } = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
    };

    try {
        if (!selectedCategory) return res.status(400).json({ message: 'Category is required.' });

        const jobs = await JobCollection.find({ type: { $regex: selectedCategory, $options: 'i' } })
            .skip((options.page - 1) * options.limit)
            .limit(options.limit)
            .exec();

        const totalJobs = await JobCollection.countDocuments({ type: { $regex: selectedCategory, $options: 'i' } });

        res.json({
            totalJobs,
            totalPages: Math.ceil(totalJobs / options.limit),
            currentPage: options.page,
            jobs,
        });
    } catch (error) {
        console.error('Error fetching jobs by category:', error.message);
        return res.status(500).json({ message: 'Failed to retrieve jobs for this category' });
    }
});

// Handle application submission and update seeker's appliedJobs
router.post('/applications', async (req, res) => {
    try {
        const { jobId, seekerId, providerId, status } = req.body;

        const newApplication = new Application({
            jobId,
            seekerId,
            providerId,
            status,
        });
        await newApplication.save();

        await Seeker.findByIdAndUpdate(
            seekerId,
            { $addToSet: { appliedJobs: jobId } },
            { new: true }
        );

        res.status(201).json({ message: 'Application submitted successfully', application: newApplication });
    } catch (error) {
        console.error('Error creating application:', error.message);
        res.status(500).json({ message: 'Error submitting application', error });
    }
});

module.exports = router;
