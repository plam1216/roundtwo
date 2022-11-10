///////////////
// DEPENDENCIES
///////////////
const express = require('express')
const app = express()

// get .env variables
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

// const session = require('express-session')
const listingsController = require('./controllers/listings.js')

const PORT = process.env.PORT || 4000

//////////////
// MIDDLEWARE
//////////////
app.use(cors()) // to prevent cors errors, allows access to all origins
app.use(morgan('dev')) // logging
app.use(express.json()) // parse json bodies
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
// }));

app.use('/listings', listingsController) // adds listing controller

///////////////////////
// DATABASE CONNECTION
///////////////////////
mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewURLParser: true
})

const db = mongoose.connection
db.on('connected',() => console.log('Connected to MongoDB'))
db.on('disconnected',() => console.log('Disconnected from MongoDB'))
db.on('error',(err) => console.log(err + 'error connecting to MongoDB'))


//////////
// ROUTES
//////////
app.get('/', (req, res) => {
    res.send('Route is working!')
})


/////////////
// LISTENING
/////////////
app.listen(PORT, () => {
    console.log('Listening on PORT: ', PORT)
})