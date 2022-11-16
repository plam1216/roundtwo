import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Filter from '../../Components/Filter/Filter.jsx'

const Shop = ({ listings, onFilterSelected }) => {
    const [size, setSize] = useState(null)

    const handleChange = (event) => {
        setSize(event.target.value)
        console.log(size)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFilterSelected(size)

    }

    // loaded : loading
    const loaded = () => {
        let allListings =
            <div className="row">
                {listings.map((listing) => {
                    return (
                        <div className="col">
                            <div className="listing">
                                <Link
                                    to={`/shop/${listing._id}`}>
                                    <img
                                        className="shop-img"
                                        src={listing.image}
                                        alt={listing.image}
                                    />

                                    <div className="listing-details" style={{ fontWeight: 700 }}>
                                        <div className="listing-name">
                                            {listing.name}
                                        </div>
                                        <div className="listing-size">
                                            {listing.size}
                                        </div>
                                    </div>

                                    <div className="listing-description">
                                        {listing.description}
                                    </div>
                                    
                                    <div className="listing-price">
                                        ${listing.price}
                                    </div>
                                </Link>
                            </div>
                        </div >
                    )
                })}
            </div>

        return (
            <div className="container-fluid">
                <Filter
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                {allListings}
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return listings ? loaded() : loading()
}

export default Shop