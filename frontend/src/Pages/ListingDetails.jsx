import React from 'react'
import { Link } from 'react-router-dom'

const ListingDetails = (props) => {

    const loaded = () => {
        const id = props.match.params.id
        const listings = props.listings

        const listing = listings.find(l => l._id === id)
        console.log(listing)
        
        const removeListing = () => {
            props.deleteListing(listing._id)
            props.history.push('/shop')
        }

        return (
            <div className="listingDetail">
                <img src={listing.image} alt={listing.image} style={{ height: '500px' }} />
                <p>
                    {listing.name}
                    Size: {listing.size}
                </p>
                <p>
                    ${listing.price}
                </p>
                <p>{listing.description}</p>
                <Link className="btn btn-primary" to={`/edit/${id}`}>Edit</Link>
                <button className="btn btn-primary" onClick={removeListing}>Delete</button>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }

    return props.listings ? loaded() : loading()
}

export default ListingDetails