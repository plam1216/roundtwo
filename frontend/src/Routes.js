import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { auth } from './services/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'

import Nav from './Components/Nav/Nav.jsx'

import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import Sell from './Pages/Sell.jsx'
import ListingDetails from './Pages/ListingDetails.jsx'
import EditListing from './Pages/EditListing.jsx'

const Routes = () => {
    const [listings, setListings] = useState(null)
    const [user, setUser] = useState(null)

    const URL = "http://localhost:4000/listings/"

    const getListings = async () => {
        const response = await fetch(URL)
        // console.log(response)

        // convert data to json to properly read it
        const data = await response.json()
        // console.log(data)

        setListings(prev => data)
    }

    // define function that uses API call to create listings
    const createListing = async (formData) => {
        const token = await user.getIdToken();
        console.log(token)

        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(formData)
        })
        getListings()
    }

    const deleteListing = async (id) => {
        await fetch(URL + id, {
            method: "DELETE"
        })

        getListings()
    }

    const updateListing = async (listing, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(listing)
        })

        getListings()
    }

    useEffect(() => {
        getListings()

        // FIREBASE AUTHENTICATION
        // 'user' param in onAuthStateChanged is an object with user's Google info
        const unsubscribe = onAuthStateChanged(auth, user => {
            // update state of user (defined as null above)
            setUser(user)
            // console.log(user)
        })
        // return statement is optional for useEffect
        // it is a cleanupeffect
        return unsubscribe
    }, [])

    return (
        <>
            <Nav user={user} />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/shop'>
                    <Shop
                        listings={listings}
                    />
                </Route>
                <Route
                    path='/shop/:id'
                    render={(rp) => (
                        <ListingDetails
                            deleteListing={deleteListing}
                            listings={listings}
                            {...rp}
                        />
                    )}
                >
                </Route>
                <Route
                    path='/edit/:id'
                    render={(rp) => (
                        <EditListing
                            updateListing={updateListing}
                            listings={listings}
                            {...rp}
                        />
                    )}
                >
                </Route>
                <Route exact path='/sell'>
                    <Sell
                        createListing={createListing} />
                </Route>
            </Switch>
        </>
    )
}

export default Routes