const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/quoteModel');
const Quote = require('./../../models/quoteModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
);
 
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection succesful!');
  });

//Read JSON file

const tours = JSON.parse(
  fs.readFileSync(  ` ${__dirname}/quotes-simple.json`, 'utf-8'),
);

//IMPORT DATA INTO DATABASE

const importData = async () => {
  try {
    await Tour.create(quotes);
    console.log('Data Successfully loaded...!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//Now what about the data that is already in the database ?....we can also create an easy way to delete all of that data at the same time...

// DELETE ALL DATA FROM CURRENT DATABASE OR COLLECTION

const deleteData = async () => {
  try {
    await Tour.deleteMany(); //deleteMany() as the same name as the native mongodb function
    console.log('Data Successfully deleted...!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

// console.log(process.argv);