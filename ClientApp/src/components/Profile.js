import React, { useState } from "react"
import axios from "axios"

const Profile = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [accountCreated, setAccountCreated] = useState("")
  // const [dream, setDream] = useState("")

  const GetProfileRequest = async () => {
    const resp = await axios.get("https://localhost:5001/api/UserProfile")
    console.log(resp.data)

    Username: username,
    Password: password,
    Email: email,
    AccountCreated: accountCreated,
  }

  const GetDreamRequest = async () => {
    const resp = await axios.get("https://localhost:5001/api/LongTermGoals")
    console.log(resp.data)
  }

  return (
    <div>
      <p>Profile page</p>
      <h1>Username:{username}</h1>
      <h2>Password:{password}</h2>
      <h2>Email: {email}</h2>
      <h2>Date Created: {accountCreated}</h2>
      <h2>Dream: {Dream}</h2>
    </div>
  )
}

export default Profile
