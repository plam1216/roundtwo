import React, { useState } from 'react'
import NewListing from '../Components/NewListing/NewListing.jsx'

const Sell = () => {
  // useState since listing information is changing as user fills out the form
  const [listing, setListing] = useState({
    name: "",
    size: "",
    price: 0,
    description: "",
    image: "",
  })

  // URL where we are making API calls
  const URL = 'http://localhost:4000/listings'

  // define function that uses API call to create listings
  const createListing = async (listingForm) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(listingForm)
    })
  }

  // as information is entered into form, 'listing' state is updated'
  // '...' spread operator to apply changes to each key:value pair
  const handleChange = (event) => {
    setListing({ ...listing, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    // stop page from refreshing after submitting
    event.preventDefault()

    // call 'createListing' passing in the now updated 'listing' state
    createListing(listing)

    // reset listing
    setListing({
      name: "",
      size: "",
      price: 0,
      description: "",
      image: "",
    })

    // redirects user to homepage after new listing is added to database
    window.location = '/'
  }

  return (
    <div className="container">
      <h1>Sell an Item</h1>
      <NewListing
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default Sell