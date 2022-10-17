const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    condition: { type: String },
    category: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true, min: 1 },
    description: String,
    image: { type: String, required: true }
}, {
    timestamps: true
})

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    listings: [listingSchema],
    bio: String
}, {
    timestamps: true
})

const User = mongoose.model('User', UserSchema)
module.exports = User