import React, { useState } from "react"
import axios from "axios"

const LifeGoals = () => {
  const [oneYearGoals, setOneYearGoals] = useState("")

  const GetRequest = async () => {
    const resp = await axios.get("")
    console.log(resp.data)
  }

  const PostSubmit = async () => {
    const resp = await axios.get("swagger url")
    console.log(resp.data)

    // setState(resp.data)

    return (
      <>
        <div>
          <form onSubmit={PostSubmit}>
            <label>
              <textarea rows='10' cols='50'>
                My Evolving Long Term Dream
              </textarea>
            </label>
            <label>
              <textarea></textarea>
            </label>
          </form>
        </div>
      </>
    )
  }
}

export default LifeGoals
