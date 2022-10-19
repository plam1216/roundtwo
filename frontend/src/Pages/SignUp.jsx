import React from 'react'
import { useState, useEffect } from 'react'

import SignUpForm from '../Components/SignUpForm/SignUpForm'

const SignUp = () => {
  // set to null until we fetch data and GET users from MongoDB
  const [users, setUsers] = useState(null)

  // use state since we are new users are added when they signUp
  const [signUp, setSignUp] = useState({
    username: "",
    password: "",
    listings: [],
    bio: ""
  })

  const URL = 'http://localhost:4000/user'

  // get users from MongoDB
  const getUsers = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    
    // current users is data in MongoDB
    setUsers(data)
  }

  // create user using POST method defined in backend 'users.js'
  const createUser = async (formData) => {
    await fetch(URL, {
      // change method to POSt, by default is GET
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(formData)
    })

    // get list users after updating
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleChange = (event) => {
    setSignUp({ ...signUp, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    createUser(signUp)
    setSignUp({
      username: "",
      password: "",
      listings: []
    })
  }
  return (
    <SignUpForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      createUser={createUser}
    />
  )
}

export default SignUp