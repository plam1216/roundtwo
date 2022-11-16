import React from 'react'
import { Link } from 'react-router-dom'

const ListingDetails = (props) => {
    // console.log(props.user)

    const loaded = () => {
        const id = props.match.params.id
        const listings = props.listings

        const listing = listings.find(l => l._id === id)
        // console.log(listing)

        const removeListing = () => {
            // prompt user to confirm if they want to delete listing
            const response = window.confirm(`Are you sure you want to delete ${listing.name}?`)

            if (response) {
                props.deleteListing(listing._id)
                props.history.push('/shop')
            } else {
                return
            }
        }

        let listingDetails =
            <div className="col">
                <div className="listing">
                    <img
                        className="detail-img"
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
                </div>

                {props.user ?
                    <div className="text-center">
                        <Link className="btn btn-secondary m-3" to={`/edit/${id}`}>Edit</Link>
                        <button className="btn btn-secondary" onClick={removeListing}>Delete</button>
                    </div>
                    :
                    null
                }
            </div>

        return (
            <div className="container-fluid">
                {listingDetails}
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }

    return props.listings ? loaded() : loading()
}

export default ListingDetails