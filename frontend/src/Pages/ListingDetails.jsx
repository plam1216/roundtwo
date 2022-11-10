import React from 'react'

const ListingDetails = (props) => {
    const loaded = () => {
        const id = props.match.params.id
        const listings = props.listings

        const listing = listings.find(l => l._id === id)
        console.log(listing)

        return (
            <div className="listingDetail">
                <img src={listing.image} alt={listing.image} style={{height: '500px'}}/>
                <p>
                    {listing.name}
                    Size: {listing.size}
                </p>
                <p>
                    ${listing.price}
                </p>
                <p>{listing.description}</p>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading</h1>
    }

    return props.listings ? loaded() : loading()
}

export default ListingDetails