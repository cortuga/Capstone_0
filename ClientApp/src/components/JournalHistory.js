import React, { useState, useEffect } from "react"
import axios from "axios"

const JournalHistory = () => {
  const [entry, setEntry] = useState([])

  const getData = async () => {
    const resp = await axios.get("https://localhost:5001/api/Journal")
    console.log(resp.data)
    setEntry(resp.data)
  }

  useEffect(() => {
    getData()
  }, [])

  // setEntry(resp.data)
  return <div>Hello Frinds</div>
}

export default JournalHistory
