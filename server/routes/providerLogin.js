const express = require('express');
const router = express.Router();
const ProviderCollection = require('../models/providerCollectiondb'); // Provider model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'yourSecretKey'; // Replace with a secure key

// POST /api/providerLogin
router.post('/providerLogin', async (req, res) => {
  const { email, password } = req.body;

  // Validate email and password fields
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Find provider by email
    const provider = await ProviderCollection.findOne({ email });
    if (!provider) {
      return res.status(400).json({ message: 'Provider not found.' });
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, provider.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password.' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: provider.userId }, secretKey, { expiresIn: '1h' });

    // Send token and userId in the response
    res.status(200).json({ token, userId: provider._id });
  } catch (error) {
    console.error('Provider login error:', error);
    res.status(500).json({ message: 'Login failed.' });
  }
});

module.exports = router;
