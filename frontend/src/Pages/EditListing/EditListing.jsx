import React, { useState } from 'react'

const EditListing = (props) => {
    const id = props.match.params.id
    const listings = props.listings

    const listing = listings.find(l => l._id === id)
    console.log(listing)

    const [editForm, setEditForm] = useState(listing)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateListing(editForm, listing._id)
        props.history.push(`/shop/${id}`)
    }

    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    return (
        <div className="container-fluid">
            <div className="col-md-4 offset-md-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={editForm.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Size</label>
                        <input
                            className="form-control"
                            type="text"
                            name="size"
                            value={editForm.size}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            className="form-control"
                            type="number"
                            name="price"
                            value={editForm.price}
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
                            value={editForm.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input
                            className="form-control"
                            type="text"
                            name="image"
                            value={editForm.image}
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
        </div>
    )
}

export default EditListing