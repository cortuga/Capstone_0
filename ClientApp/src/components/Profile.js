import React, { useState } from "react"
import axios from "axios"

const Profile = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState(initialState)
  const [email, setEmail] = useState(initialState)
  const [accountCreated, setAccountCreated] = useState(initialState)
  const [dream, setDream] = useState(initialState)

  const GetRequest = async () => {
    const resp = await axios.get("https://localhost:5001/api/UserProfile")
    console.log(resp.data)

    //Create Axios call to heroku to get user information. Then parse out the JSON into variables with the convention below.
    //Maybe create a an edit function with a put request to edit the user info
    // const fetchunicorn = async () => {
    //   const resp = await axios.get('swagger url')
    //   console.log(resp.data or whatever)

    // }
    return (
      <div>
        <p>Profile page</p>
        <h1>Username:{username}</h1>
        <h2>Password:{password}</h2>
        <h2>Email: {email}</h2>
        <h2>Date Created: {dateCreated}</h2>
        <h2>Dream: {Dream}</h2>
      </div>
    )
  }
}

export default Profile
