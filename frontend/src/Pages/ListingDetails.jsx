import React from 'react'
import { Link } from 'react-router-dom'

const ListingDetails = (props, { user }) => {
    // console.log(props)

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

                {user ?
                    <>
                        <Link className="btn btn-primary" to={`/edit/${id}`}>Edit</Link>
                        <button className="btn btn-primary" onClick={removeListing}>Delete</button>
                    </>
                    :
                    null
                }
            </div >
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }

    return props.listings ? loaded() : loading()
}

export default ListingDetails