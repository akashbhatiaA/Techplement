const express = require('express');
const router = express.Router();
const quoteController = require('./../controller/quoteController');  // Ensure this path is correct

// Define routes here
router.route('/').get( quoteController.getAllQuotes).post(quoteController.createQuote)

//get ki help se user data ko dekh skta ha and post ki help se user data ko post kar sakta ha
// sare CRUD options quoteController me honge
router.route('/:id').patch(quoteController.updateQuote).delete(quoteController.deleteQuote);
router.route('/random').get(quoteController.getQuote);


module.exports = router;
 