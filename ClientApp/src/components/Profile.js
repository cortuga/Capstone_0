import React from "react"

const Profile = () => {
  //Create Axios call to heroku to get user information

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

export default Profile
