const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true, min: 1 },
    description: String,
    image: { type: String, required: true }
}, {
    timestamps: true
})

const Listing = mongoose.model('Listing', listingSchema)
module.exports = Listing