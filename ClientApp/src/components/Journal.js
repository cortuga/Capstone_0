import React from "react"

const Journal = () => {
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type='text' name='name' />
          </label>
          <input type='submit' value='Submit' />
          {/* whats going on above?? */}

          <textarea rows='35' cols='80'>
            Testing This text area
          </textarea>
        </form>
      </div>
    </>
  )
}

export default Journal
