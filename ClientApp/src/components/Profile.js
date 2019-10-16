import React, { useState, useEffect } from "react"
import axios from "axios"
import moment from "moment"

const Profile = () => {
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [email, setEmail] = useState([])
  const [accountCreated, setAccountCreated] = useState("")
  const [dream, setDream] = useState([])

  const GetProfileRequest = async () => {
    console.log("data")
    const resp = await axios.get("https://localhost:5001/api/UserProfile/1")
    // const data = resp.data
    setUsername(resp.data.username)
    setPassword(resp.data.password)
    setEmail(resp.data.email)
    setAccountCreated(resp.data.accountCreated)
  }

  const GetDreamRequest = async () => {
    const resp = await axios.get("https://localhost:5001/api/LongTermGoals/10")

    console.log(resp.data)
    setDream(resp.data.oneYearGoals)
  }

  useEffect(() => {
    GetDreamRequest()
    GetProfileRequest()
  }, [])

  return (
    <>
      <div class='container'>
        <p class='subtitle'>Profile page</p>

        <h1 class='text'>Username: {username}</h1>

        <h2 class='password'>Password: {password}</h2>

        <h2>Email: {email}</h2>
        <h2>
          Date Created:{" "}
          {accountCreated && moment().format("MMMM Do YY, h:mm:ss a")}
          {/* Moment.js */}
        </h2>
        <h2>LTG / Dreams: {dream}</h2>

        <div class='has-text-centered section container'>
          <footer>Made with 💛 at SDG</footer>
        </div>
      </div>
    </>
  )
}

export default Profile
