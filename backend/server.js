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

const listingsController = require('./controllers/listings.js')

const PORT = process.env.PORT || 4000

// GOOGLE FIREBASE MIDDLEWARE
const admin = require("firebase-admin");
// const serviceAccount = require("./react-roundtwo-firebase-adminsdk-y7v4q-fd8410f92e.json");

admin.initializeApp({
    // credential: admin.credential.cert(serviceAccount)
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "react-roundtwo",
        "private_key_id": process.env.PRIVATE_KEY_ID,
        "private_key": process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
        "client_email": "firebase-adminsdk-y7v4q@react-roundtwo.iam.gserviceaccount.com",
        "client_id": "105675679511014578019",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-y7v4q%40react-roundtwo.iam.gserviceaccount.com"
    })
});

///////////////////////
// DATABASE CONNECTION
///////////////////////
mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewURLParser: true
})

const db = mongoose.connection
db.on('connected', () => console.log('Connected to MongoDB'))
db.on('disconnected', () => console.log('Disconnected from MongoDB'))
db.on('error', (err) => console.log(err + 'error connecting to MongoDB'))

//////////////
// MIDDLEWARE
//////////////
app.use(cors()) // to prevent cors errors, allows access to all origins
app.use(morgan('dev')) // logging
app.use(express.json()) // parse json bodies


// authorization middleware
app.use(async (req, res, next) => {
    // get 'Authorization' from /frontend/Routes.js createListings()
    const token = req.get('Authorization')

    if (!token) return next()

    // 'verifyIdToken' takes argument and returns 'user' object
    // replaces 'Bearer ' with '' so the token value is just the number
    const user = await admin.auth().verifyIdToken(token.replace('Bearer ', ''))
    if (user) {
        req.user = user
        console.log(req.user)
    } else {
        return res.status(401).json({ error: 'token invalid' })
    }
    next()
})

// function isAuthenticated(req, res, next) {
//     if (req.user) return next()
//     res.status(401).json({ error: 'please login first' })
// }

///////////////
// CONTROLLERS
///////////////
app.use('/listings', listingsController) // adds listing controller
// app.use('/listings', isAuthenticated, listingsController) // adds listing controller

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