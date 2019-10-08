import React from "react"

const Journal = () => {
  //  // const fetchunicorn = async () => {
  //   const resp = await axios.get('swagger url')
  //   console.log(resp.data or whatever)

  //   setState (resp.data)
  // }

  function handleSubmit(e) {
    e.preventDefault() //Considering I want this to take user to Journal history or take user to todo page, i shouldn't prevent default.
  }

  return (
    <>
      <div>
        <h2>Morning Mindset:</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label>
              <textarea rows='5' cols='50'>
                Today's Message to Myself:
              </textarea>
            </label>

            {/* the question above doesn't have a place in the model. Going to make the other 3 ree pillers part of the todo section */}

            {/* <textarea rows='5' cols='50'>
              Today's Top 3 Goals / Priorities...
            </textarea> */}
            {/* Want to make the Top 3 goals passed to the Todos component */}

            <textarea rows='5' cols='50'>
              One Thing I can get excited about today is...
            </textarea>

            <textarea rows='5' cols='50'>
              If one word could describe the kind of person I want to be today,
              then that word is... and why I chose it...
            </textarea>

            <textarea rows='5' cols='50'>
              Someone who need me on my A game today is...
            </textarea>

            <textarea rows='5' cols='50'>
              A situation that might stress me out or trip me up today...
            </textarea>

            <textarea rows='5' cols='50'>
              ...and the way that my best self would deal with this is...
            </textarea>

            <textarea rows='5' cols='50'>
              Someone I could surprise with a note, gift,or sign of appreciation
              is...
            </textarea>

            <textarea rows='5' cols='50'>
              One action I could take today to demonstrate excellence or real
              value is...
            </textarea>

            <textarea rows='5' cols='50'>
              One bold action I could take today is...
            </textarea>

            <textarea rows='5' cols='50'>
              If I highest self was looking at my life from a high level, I
              would tell myself to remember that...
            </textarea>

            <textarea rows='5' cols='50'>
              The big projects I have to keep in mind that I want to take on,
              even if I can't act toward them today, are...
            </textarea>

            <textarea rows='5' cols='50'>
              I would know that today was a great success if at the end of the
              day I did or felt these things...
            </textarea>

            <input type='submit' value='Submit' />
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
