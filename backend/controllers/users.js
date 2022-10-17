const express = require('express')
const userRouter = express.Router()
const User = require('../models/user.js')
const bcrypt = require('bcrypt')

// index, all users
userRouter.get('/', async (req, res) => {
    try {
        // find all the users
        res.json(await User.find({}))
    }
    catch (err) {
        res.status(400).json(err)
    }
})

// delete user
userRouter.delete('/:userid', async (req, res) => {
    try {
        res.json(await User.findByIdAndDelete(req.params.userid))
    } catch (err) {
        res.status(400).json(err)
    }
})

// update user
userRouter.put('/:userid', async (req, res) => {
    try {
        res.json(await User.findByIdAndUpdate(req.params.userid, req.body, {new:true}))
    } catch (err) {
        res.status(400).json(err)
    }
})

// create user; sign-up form
userRouter.post('/', async (req, res) => {
    // check if 'username' exists in database
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        // if 'username' doesn't exist
        if(!foundUser) {
            // overwrite password with encrypted password
            req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
            // create new 'User'
            res.json(User.create(req.body))
        } else {
            // 'username' does exist
            res.send('That username is taken')
        }
    })
})

// show one user
userRouter.get('/:userid', async (req, res) => {
    try {
        User.findById(req.params.userid, (err, foundUser) => {
            res.json(foundUser)
        })
    } catch (err) {
        res.status(400).json(err)
    }
})
module.exports = userRouter