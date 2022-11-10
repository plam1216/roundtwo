import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Nav from './Components/Nav/Nav.jsx'

import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop.jsx'
import ListingDetails from './Pages/ListingDetails.jsx'
import Sell from './Pages/Sell.jsx'

const Routes = () => {
    const [listings, setListings] = useState(null)

    const URL = "http://localhost:4000/listings"

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
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(formData)
        })
        getListings()
    }

    useEffect(() => {
        getListings()
    }, [])

    return (
        <>
            <Nav />
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