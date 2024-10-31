const express = require('express');
const cors = require('cors');
const gigPoolRouter = require('./routes/gigPoolRouter');
const seekerCreationRouter = require('./routes/seekerCreationRouter');
const providerCreationRouter = require('./routes/providerCreationRouter');
const seekerLogin = require('./routes/seekerLogin')
const providerLogin = require('./routes/providerLogin')
require('dotenv').config();
const connectDB = require("./config/db");
const gigTrackerRouter = require("./routes/gigTrackerRouter");
const gigProvider = require('./routes/gigProvider');

const app = express();
const PORT = process.env.PORT || 5000;

// Apply CORS middleware
app.use(cors({
    origin: process.env.ORIGIN || 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());

// Mount the router at /api
app.use('/api', gigPoolRouter);
app.use('/api', seekerCreationRouter);
app.use('/api', providerCreationRouter)
app.use('/api', gigTrackerRouter);
app.use('/api', seekerLogin)
app.use('/api', providerLogin)
app.use('/api',gigProvider)

// Connect to database
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 