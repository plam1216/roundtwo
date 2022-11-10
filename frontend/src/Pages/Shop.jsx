import React, { useState, useEffect } from 'react'
import ShopListings from '../Components/ShopListings/ShopListings.jsx'

const Shop = () => {
    const [allListings, setAllListings] = useState(null)

    const URL = "http://localhost:4000/listings"

    // define function that makes API call to GET all listings
    const getListings = async () => {
        const response = await fetch(URL)
        // console.log(response)

        // convert data to json to properly read it
        const data = await response.json()
        // console.log(data)

        setAllListings(data)
    }

    useEffect(() => {
        getListings()
    }, [])

    return (
        <div>
            <ShopListings
                allListings={allListings}
            />
        </div>
    )
}

export default Shop