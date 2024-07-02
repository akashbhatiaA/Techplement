const Quote = require('./../models/quoteModel');

exports.getAllQuotes = async (req, res) => { // jb async lgta ha tb await lgta ha.
    try {
        const quotes = await Quote.find();
        res.status(200).json({
            status: "success",
            results: quotes.length,
            data: {
                quotes,
            }
        });
    } catch (err) { 
        res.status(500).json({ message: err.message });
    }
};

exports.createQuote = async (req, res) => {
    try{ // hm postman ma post ka use kra ga..
        const quote = await Quote.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                quote,
            },
        });
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getQuote = async (req, res) => {
    try{
        const count = await Quote.countDocuments();
        const random = Math.floor(Math.random() * count);
        const randomQuote = await Quote.findOne().skip(random);
        // const quote = await Quote.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                randomQuote,
            }
        });
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
};

exports.updateQuote = async (req, res) =>{
    try{
        const quotes = await Quote.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status:'success',
            data: {
                quotes,
            }
        })
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
}
exports.deleteQuote = async (req, res) =>{
    try{
        const quote = await Quote.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:'success',
            data :{
                quote: null,
            }
        })
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
}