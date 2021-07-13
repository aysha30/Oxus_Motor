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


app.use(express.json())

const carRouter = require('./routes/cars')
app.use('/cars', carRouter)

const inventoryRouter = require('./routes/inventory')
app.use('/inventory', inventoryRouter)

const contactUsRouter = require('./routes/contactUs')
app.use('/contactUs', contactUsRouter)

const homeRouter = require('./routes/home')
app.use('/home', homeRouter)

if(process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started')
  console.log(`app is running on port ${PORT}`);
})
