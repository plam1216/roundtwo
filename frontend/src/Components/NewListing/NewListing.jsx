import React from 'react'

const Listing = ({ handleChange, handleSubmit }) => {
  return (
      <div className="col-md-4 offset-md-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Size</label>
            <input
              className="form-control"
              type="text"
              name="size"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              // type="text"
              rows="3"
              name="description"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              className="form-control"
              type="text"
              name="image"
              onChange={handleChange}
            />
          </div>

          <div className="pt-2 pb-4 text-center">
            <button
              className="btn btn-secondary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
  )
}

export default Listing