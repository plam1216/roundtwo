const express = require('express')
const listingsRouter = express.Router()
const Listing = require('../models/listing.js')

// INDEX
listingsRouter.get('/', async (req, res) => {
    try {
        res.json(await Listing.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// DELETE
listingsRouter.delete('/:id', async (req, res) => {
    try {
        res.json(await Listing.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// UPDATE
listingsRouter.put('/:id', async (req, res) => {
    try {
        res.json(await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    } catch {
        res.status(400).json(error)
    }
})

// CREATE
listingsRouter.post('/', async (req, res) => {
    try {
        req.body.userId = req.user.uid;
        req.body.email = req.user.email;
        // by default 
        // in frontend console.log(user) keys are 'displayName' and 'photoURL'
        // in backend console.log(user) keys are 'name and 'picture'
        req.body.username = req.user.name;
        req.body.pfp = req.user.picture;
        res.json(await Listing.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})


module.exports = listingsRouter