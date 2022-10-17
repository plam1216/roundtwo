const express = require('express')
const listingRouter = express.Router()
const User = require('../models/user.js')

// index

// new, page to fill out form
// front-end; clicking on navbar via <Route>
// route would be /user/sell

// delete listing
listingRouter.delete('/:userid/:listingid', (req, res) => {
    try {
        User.findById(req.params.userid, (err, foundUser) => {
            res.json(foundUser.listings.id(req.params.listingid).remove())
            foundUser.save()
        })
    } catch (err) {
        // res.status(400).json(err)
        res.send('nope')
    }
})

// update listing
// form on the front end that will assign the filled out information to the Listing
// listingRouter.put('/:userid/:listingid', (req, res) => {
//     try {
//         User.findById(req.params.userid, (err, foundUser) => {
//             res.json(foundUser.listings.id(req.params.listingid).update(
//                 {
//                     name: req.body.name,
//                     condition: req.body.condition,
//                     category: req.body.category,
//                     size: req.body.size,
//                     price: req.body.price,
//                     description: req.body.description,
//                     image: req.body.image
//                 }, (err, result) => {
//                     console.log(result)
//                 }
//             ))
//         })
//         res.json(User.findByIdAndUpdate(req.params.userid, req.body, { new: true }))
//     } catch (err) {
//         res.status(400).json(err)
//     }
// })

// create listing
listingRouter.post('/:userid', async (req, res) => {
    try {
        User.findById(req.params.userid, (err, foundUser) => {
            // req.body is assigned to listing scehma
            // add that listing to 'listings' array
            foundUser.listings.push(req.body)
            // save the updated info
            foundUser.save()
            res.json(foundUser)
        })
    } catch (err) {
        res.status(400).json(err)
    }
})

// show, one person's listings

module.exports = listingRouter