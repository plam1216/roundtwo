import React from 'react'

const Filter = ({ handleChange, handleSubmit }) => {
    return (
        <>
            <h1>Filter</h1>
            <div className="filter-form">
                <form onSubmit={handleSubmit} className="col-3">
                    <select onChange={handleChange} className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value="All">All</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>

                    <button
                        className="btn btn-secondary"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Filter