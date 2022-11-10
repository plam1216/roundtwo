import React from 'react'
import { Link } from 'react-router-dom'

const Shop = ({ listings }) => {
    // loaded : loading
    const loaded = () => {
        return listings.map((listing) => (
            <div className="listing">
                <Link to={`/shop/${listing._id}`}>
                    <img src={listing.image} alt={listing.image} />
                    <p>
                        {listing.name}
                        Size: {listing.size}
                    </p>
                    <p>
                        ${listing.price}
                    </p>
                </Link>
            </div >
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return listings ? loaded() : loading()
}

export default Shop