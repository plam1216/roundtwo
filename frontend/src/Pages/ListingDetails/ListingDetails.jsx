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

                        {/* <div className="mt-4 mb-0 fw-bold">
                            Seller:
                        </div>

                        <div className="seller-info">
                            <div>
                                {props.user.displayName}
                                <br />
                                {props.user.email}
                            </div>
                            <div>
                                <img src={props.user.photoURL} alt="user-pfp" />
                            </div>
                        </div> */}
                    </div>

                    {props.user ?
                        <div className="text-center mt-4">
                            <Link className="btn btn-secondary m-3" to={`/edit/${id}`}>Edit</Link>
                            <button className="btn btn-secondary" onClick={removeListing}>Delete</button>
                        </div>
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