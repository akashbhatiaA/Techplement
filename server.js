const mongoose = require('mongoose');
const dotenv = require('dotenv');
const quoteModel = require('./models/quoteModel');



dotenv.config({ path: './config.env' });

const app = require('./app');



const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
);

mongoose
   .connect(DB
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     // useFindAndModify: false,
//     // useUnifiedTopology: true,
)
  .then(() => {
    console.log('DB connection succesful!');
  }) 
  .catch((err) => {
    console.error('DB connection error:', err);
});
// console.log(process.env);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

