import React, { useState } from "react"
import axios from "axios"

const NewUserPage = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const PostNewUser = async () => {
    const resp = await axios.Post("https://localhost:5001/api/UserProfile", {
      UserName: userName,
      Password: password,
      Email: email
    })
  }

  // const fetchUserProfile = async () => {
  //   const resp = await axios.get("https://localhost:5001/api/UserProfile")
  //   console.log(resp)
  // }

  function handleSubmit(event) {
    event.preventDefault()
    PostNewUser()
    // console.log()
  }

  return (
    <>
      <section>
        <info>An object in motion stays in motion!</info>
      </section>
      <form
      // onSubmit={handleSubmit}
      >
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type='text'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type='text'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        {/* <label>
          Name:
          <input type='text' name='name' />
        </label> */}
        {/* <input type='submit' value='submit' /> */}
        <button className='submit-button-profile' onSubmit={handleSubmit}>
          Create Profile
        </button>
      </form>
    </>
  )
}

export default NewUserPage
