import React, { useState } from 'react'
import NewListing from '../../Components/NewListing/NewListing.jsx'
import {useHistory} from 'react-router-dom'

const Sell = ({ createListing }) => {
  const history = useHistory()

  const [formData, setFormData] = useState({
    name: "",
    size: "",
    price: 0,
    description: "",
    image: "",
  })

  // as information is entered into form, 'listing' state is updated'
  // '...' spread operator to apply changes to each key:value pair
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    // stop page from refreshing after submitting
    event.preventDefault()

    // call 'createListing' passing in the now updated 'listing' state
    createListing(formData)

    // reset listing
    setFormData({
      name: "",
      size: "",
      price: 0,
      description: "",
      image: "",
    })

    // redirects user to homepage after new listing is added to database
    // window.location = '/'
    history.push('/')
  }

  return (
    <div className="container-fluid">
      <h1 className="text-center">Sell an Item</h1>
      <NewListing
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default Sell