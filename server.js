const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();


// Middleware to parse JSON bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());                   // req.body

const PORT = process.env.PORT || 3000;

// 1. User Router
// Import the router files
const userRoutes = require('./routes/userRoutes');

// Use the router
app.use('/user', userRoutes);

// 2. Candidate Router
// Import the router files
const candidateRoutes = require('./routes/candidateRoutes');

// Use the router
app.use('/candidate', candidateRoutes);


// Listening to Port
app.listen(PORT, () => {
  console.log("Listening on port 3000");
})
