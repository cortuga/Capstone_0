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
      <section class='section'>
        <section class='container'>
          <info>An object in motion stays in motion!</info>
        </section>
        <form
        // onSubmit={handleSubmit}
        >
          <section class='container'>
            <label>
              Username:{" "}
              <input
                type='text'
                name='username'
                placeholder='Alex Smith'
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </label>
          </section>
          <label>
            Password:{" "}
            <input
              type='text'
              name='password'
              placeholder='elephant1988'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <label>
            Email:{" "}
            <input
              type='text'
              name='email'
              placeholder='abc123@gmail.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>

          <div class='field'>
            <p class='control has-icons-left'>
              <span class='select'>
                <select>
                  <option selected>Country</option>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </span>
              <span class='icon is-small is-left'>
                <i class='fas fa-globe'></i>
              </span>
            </p>
          </div>

          {/* <label>
          Name:
          <input type='text' name='name' />
        </label> */}
          {/* <input type='submit' value='submit' /> */}
          <div class='field'>
            <label class='label'>Subject</label>
            <div class='control'>
              <div class='select'>
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div class='field'>
            <div class='control'>
              <label class='checkbox'>
                <input type='checkbox' />I agree to the
                <a href='#'>terms and conditions</a>
              </label>
            </div>
          </div>

          <div class='field is-grouped'>
            <div class='control'>
              <button class='button is-link' onSubmit={handleSubmit}>
                Submit
              </button>
            </div>
            <div class='control'>
              <button class='button is-text'>Cancel</button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewUserPage
