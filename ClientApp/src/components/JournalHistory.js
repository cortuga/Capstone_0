import React, { useState, useEffect } from "react"
import axios from "axios"
import moment from "moment"

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
  return (
    <div>
      {entry.map((e, i) => {
        return (
          <ul key={i}>
            <h4>
              Date: {""}
              {e.accountCreated &&
                moment(e.accountCreated).format("MMMM Do YY, h:mm:ss a")}
            </h4>
            <li>Excited About Today? {e.excitedAboutToday}</li>
            <li>{e.oneWordToDescribeMeToday}</li>
            <li>{e.whoNeedsMeOnMyAGame}</li>
            <li>{e.WhatMightStressMeOut}</li>
            <li>{e.theWayMyBestSelfWouldDealIs}</li>
            <li>{e.someoneToSurpriseWithAppreciation}</li>
            <li>{e.oneActionToDemonstrateExcellence}</li>
            <li>{e.oneBoldActionToTakeToday}</li>
            <li>{e.lookingAtMyLifeMetaIWouldTellMyself}</li>
            <li>{e.projectsToKeepInMindForFutureAre}</li>
            <li>{e.iWouldKnowTodayIsASuccessIf}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default JournalHistory
