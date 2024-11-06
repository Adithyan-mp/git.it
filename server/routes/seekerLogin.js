const express = require('express');
const router = express.Router();
const SeekerCollection = require('../models/seekerCollectionsdb'); // Seeker model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'yourSecretKey'; // Replace with a secure key

// POST /api/seekerLogin
router.post('/seekerLogin', async (req, res) => {
  const { email, password } = req.body;

  // Validate email and password fields
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Find seeker by email
    const seeker = await SeekerCollection.findOne({ email });
    if (!seeker) {
      return res.status(400).json({ message: 'Seeker not found.' });
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, seeker.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password.' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: seeker.userId}, secretKey, { expiresIn: '1h' });

    // Send token and userId in the response
    res.status(200).json({ token, userId: seeker._id });
  } catch (error) {
    console.error('Seeker login error:', error);
    res.status(500).json({ message: 'Login failed.' });
  }
});

module.exports = router;
