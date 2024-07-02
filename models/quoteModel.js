const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({


     Quote: {
        type: String,
        required: [true, 'A user Quote must be provided'],
        trim: true,
     }
})

const  Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote; 