import React from 'react'

const ShopListings = ({ allListings }) => {
  // loaded : loading
  const loaded = () => {
    return allListings.map((listing) => (
        <div className="listing">
          <img src={listing.image} alt={listing.image} />
          <p>
            {listing.name}
            Size: {listing.size}
          </p>
          <p>
            ${listing.price}
          </p>
        </div>
      ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return allListings ? loaded() : loading()
}

export default ShopListings