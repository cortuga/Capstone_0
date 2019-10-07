import React from "react"

const Journal = () => {
  function handleSubmit(e) {
    e.preventDefault() //Considering I want this to take user to Journal history or take user to todo page, i shouldn't prevent default.

    return (
      <>
        <div>
          <form onSubmit={handleSubmit}>
            <section>
              <label>
                Name:
                <input type='text' name='name' />
              </label>
              <input type='submit' value='Submit' />
              {/* whats going on above?? */}

              <textarea rows='35' cols='80'>
                Testing This text area
              </textarea>
            </section>
            <section>
              <label>
                <h3>Already have a journal entry written?</h3>
                <h4>Upload that file</h4>
                <input type='file'></input>
              </label>
            </section>
          </form>
        </div>
      </>
    )
  }

  export default Journal
}
