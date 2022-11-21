import React from 'react'

const Filter = ({ handleChange, handleSubmit }) => {
    return (
        <>
            <h5 className="text-start fw-bold">Filter</h5>

            <div className="filter-form text-start">
                <form
                    onSubmit={handleSubmit}
                    className="row g-2"
                >
                    <div className="col-3">
                        <select
                            onChange={handleChange}
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            name="size"
                        >
                            <option value="All">All</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>

                    <div className="col-3">
                        <select
                            onChange={handleChange}
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            name="price"
                        >
                            <option value="Default">Default</option>
                            <option value="PA">Price Ascending</option>
                            <option value="PD">Price Descending</option>
                        </select>
                    </div>

                    <div className="col-2">
                        <button
                            className="btn btn-sm btn-secondary"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Filter