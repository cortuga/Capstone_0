import React from "react"

const NewUserPage = () => {


  function handleSubmit(e) {
    e.preventDefault()

    // const sendData = axios call
  }

  return (
    <>
      <form> onSubmit={handleSubmit}
        <label>
          Username:
          <input type='text' username='username' />
        </label>
        <label>
          Password:
          <input type='text' password='password' />
        </label>
        <label>
          Email:
          <input type='text' email='email' />
        </label>
        <label>
          ?:
          <input type='text' name='name' />
        </label>
        
        <input type='submit' value='submit' />
        <button className='submit-button-profile' onSubmit={}>Create Profile</button>
      </form>
    </>
  )
}

export default NewUserPage
