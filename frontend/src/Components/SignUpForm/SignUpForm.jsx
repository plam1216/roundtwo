import React from 'react'

const SignUpForm = (props) => {
    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={props.handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    onChange={props.handleChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={props.handleChange}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SignUpForm