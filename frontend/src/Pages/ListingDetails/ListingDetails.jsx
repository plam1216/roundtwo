import React from 'react'
import { Link } from 'react-router-dom'

const ListingDetails = (props) => {
    // console.log("ListingDetails, props: ", props)

    const loaded = () => {
        const id = props.match.params.id
        const listings = props.listings

        const listing = listings.find(l => l._id === id)
        // console.log("ListingDetails, listing: ", listing)

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
            <div className="row">
                <div className="col">
                    <div className="detail-listing">
                        <div className="img-div">
                            <img
                                className="detail-img"
                                src={listing.image}
                                alt={listing.image}
                            />
                        </div>

                        <div className="detail-info fw-bold">
                            <div className="detail-name">
                                {listing.name}
                            </div>
                            <div className="detail-size">
                                {listing.size}
                            </div>
                        </div>

                        <div className="detail-description">
                            {listing.description}
                        </div>

                        <div className="detail-price">
                            ${listing.price}
                        </div>

                        <div className="mt-4 mb-0 fw-bold" style={{ fontSize: "1.2rem" }}>
                            Seller:
                        </div>

                        <div className="seller-info">
                            <div>
                                {listing.username}
                                <br />
                                {listing.email}
                            </div>
                            <div>
                                <img src={listing.pfp} alt="user-pfp" />
                            </div>
                        </div>
                    </div>

                    <div className="purchase text-center mt-5">
                        <button className="btn btn-lg btn-dark">Purchase</button>
                    </div>

                    {/* if a user exists (they are logged in) */}
                    {/* check if the logged in user's email matches the listing's seller's email */}
                    {/* if it does then give them to option to edit & delete the listing */}
                    {/* else render nothing */}
                    {props.user ?
                        props.user.email === listing.email ?
                            <div className="text-center mt-4">
                                <Link className="btn btn-secondary m-1" to={`/edit/${id}`}>Edit</Link>
                                <button className="btn btn-secondary m-1" onClick={removeListing}>Delete</button>
                            </div>
                            :
                            null

                        :
                        null
                    }
                </div>
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