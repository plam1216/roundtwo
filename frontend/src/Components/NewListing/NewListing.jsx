import React from 'react'

const Listing = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
        />

        <label>Size</label>
        <input
          type="text"
          name="size"
          onChange={handleChange}
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          onChange={handleChange}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
        />
        
        <label>Image</label>
        <input
          type="text"
          name="image"
          onChange={handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Listing