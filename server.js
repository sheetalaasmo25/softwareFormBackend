const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db'); // Import the database connection
const pdfRoutes = require('./routes/pdf.route'); // Import the PDF routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB
connectDB();

// Use the PDF routes
app.use('/api', pdfRoutes);  // All routes prefixed with /api

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
