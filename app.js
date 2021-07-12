const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors());
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})


const mongo_uri = process.env.DATABASE;

const connectDB = async () => {
  await mongoose.connect(mongo_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

connectDB()

app.use(function(req, res, next) {//https://boiling-taiga-29797.herokuapp.com
  res.header("Access-Control-Allow-Origin", "https://boiling-taiga-29797.herokuapp.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json())

const carRouter = require('./routes/cars')
app.use('/cars', carRouter)

const inventoryRouter = require('./routes/inventory')
app.use('/inventory', inventoryRouter)

const contactUsRouter = require('./routes/contactUs')
app.use('/contactUs', contactUsRouter)

const homeRouter = require('./routes/home')
app.use('/home', homeRouter)

const Port = process.env.PORT;

app.listen(Port, () => {
  console.log('Server started')
  console.log(`app is running on port ${Port}`);
})
