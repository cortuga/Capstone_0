import React, { useState } from "react"
import axios from "axios"

const LifeGoals = () => {
  const [oneYearGoals, setOneYearGoals] = useState("")
  const [threeYearGoals, setThreeYearGoals] = useState("")
  const [tenYearGoals, setTenYearGoals] = useState("")
  const [longTermGoals, setLongTermGoals] = useState("")

  const GetRequest = async () => {
    const resp = await axios.get("https://localhost:5001/api/LongTermGoals")
    console.log(resp.data)
  }

  const PutSubmit = async () => {
    const resp = await axios.put("https://localhost:5001/api/LongTermGoals", {
      OneYearGoals: oneYearGoals,
      ThreeYearGoals: threeYearGoals,
      TenYearGoals: tenYearGoals,
      LongTermGoals: longTermGoals
    })
    console.log(resp)
  }

  const handleSubmit = event => {
    event.preventDefault()
    // console.log(resp.data)
    PutSubmit()
    // connect model to LTG state
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <textarea
              rows='10'
              cols='50'
              value={oneYearGoals}
              onChange={event => setOneYearGoals(event.target.value)}
            >
              My goals for this year are...
            </textarea>
          </label>

          <p>
            We tend to overestimate what we're able to do in 1 year but
            underestimate what we can do in 3.
          </p>

          <label>
            <textarea
              rows='10'
              cols='50'
              value={threeYearGoals}
              onChange={event => setThreeYearGoals(event.target.value)}
            >
              My goals 3 years from now are...
              {threeYearGoals}
            </textarea>
          </label>

          <label>
            <textarea
              rows='10'
              cols='50'
              value={tenYearGoals}
              onChange={event => setTenYearGoals(event.target.value)}
            >
              My goals 10 years from now are...
              {tenYearGoals}
            </textarea>
          </label>

          <label>
            <textarea
              rows='10'
              cols='50'
              value={longTermGoals}
              onChange={event => setLongTermGoals(event.target.value)}
            >
              My Long Term Dreams are...
              {longTermGoals}
            </textarea>
          </label>
          <button className='submit-button-LG' onSubmit={handleSubmit}>
            Remember Goals
          </button>
        </form>
      </div>
    </>
  )
}

export default LifeGoals
