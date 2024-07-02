const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const quoteController = require('./controller/quoteController');  // Ensure this path is correct
// const quoteModel = require('./models/quoteModel');  // Ensure this path is correct
const quoteRouter = require('./router/quoteRouter');

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
} 

// Middleware to parse JSON
app.use(express.json());

// Use the quote routes
app.use('/api/v1/quotes', quoteRouter);

// Start the server
module.exports = app; 