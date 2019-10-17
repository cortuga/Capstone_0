import React, { useState } from "react"
import axios from "axios"

const Journal = () => {
  const [excited, setExcited] = useState(
    "One Thing I can get excited about today is..."
  )
  const [oneWord, setOneWord] = useState(
    " If one word could describe the kind of person I want to be today, then that word is...and why I chose it..."
  )
  const [needsMe, setNeedsMe] = useState(
    "Someone who need me on my A game today is..."
  )
  const [stressMeOut, setStressMeOut] = useState(
    "A situation that might stress me out or trip me up today..."
  )
  const [bestSelf, setBestSelf] = useState(
    "...and the way that my best self would deal with this is..."
  )
  const [someoneToSurprise, setSomeoneToSurprise] = useState(
    "Someone I could surprise with a note, gift, or sign of appreciation is..."
  )
  const [excellence, setExcellence] = useState(
    "One action I could take today to demonstrate excellence or real value is..."
  )
  const [boldAction, setBoldAction] = useState(
    "One bold action I could take today is..."
  )

  const [lifeMeta, setLifeMeta] = useState(
    "If I highest self was looking at my life from a high level, I would tell myself that..."
  )
  const [futureProjects, setFutureProjects] = useState(
    "The big projects I have to keep in mind that I want to take on, even if I can't act toward them today, are..."
  )
  const [successfulToday, setSuccessfulToday] = useState(
    "I would know that today was a great success if at the end of the day I did or felt these things"
  )
  const [todaysMessage, setTodaysMessage] = useState(
    "Today's Message to Myself..."
  )
  const [topPriorities, setTopPriorities] = useState(
    "My top 3 priorities or goals today are..."
  )
  // const [mustBeDoneToday, setMustBeDoneToday] = useState("")
  const [connectToday, setConnectToday] = useState("")

  const handleSubmit = e => {
    e.preventDefault() //Considering I want this to take user to Journal history or take user to todo page, i shouldn't prevent default.
    const PostJournal = async () => {
      const resp = await axios.post("/api/Journal", {
        excitedAboutToday: excited,
        OneWordToDescribeMeToday: oneWord,
        WhoNeedsMeOnMyAGame: needsMe,
        WhatMightStressMeOut: stressMeOut,
        TheWayMyBestSelfWouldDealIs: bestSelf,
        SomeoneToSurpriseWithAppreciation: someoneToSurprise,
        OneActionToDemonstrateExcellence: excellence,
        OneBoldActionToTakeToday: boldAction,

        LookingAtMyLifeMetaIWouldTellMyself: lifeMeta,
        ProjectsToKeepInMindForFutureAre: futureProjects,
        IWouldKnowTodayIsASuccessIf: successfulToday,
        TodaysMessageToMyself: todaysMessage,
        TodaysTopPriorities: topPriorities,
        // TasksThatMustBeDoneToday: mustBeDoneToday,
        PersonsToConnectWithToday: connectToday
      })
      console.log(resp)
    }
    PostJournal()
  }

  return (
    <>
      <section class='has-text-centered'>
        <div>
          <h2 class='subtitle is-info'>Morning Mindset:</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <section class='container'>
            <label>
              <textarea
                className='textarea is-info'
                rows='5'
                cols='50'
                onChange={e => setTodaysMessage(e.target.value)}
              >
                {todaysMessage}
              </textarea>
            </label>

            {/* the question above doesn't have a place in the model. Going to make the other 3 ree pillers part of the todo section */}
            {/* <textarea rows='5' cols='50'>
              Today's Top 3 Goals / Priorities...
            </textarea> */}
            {/* Want to make the Top 3 goals passed to the Todos component */}

            <textarea
              className='textarea is-info'
              rows='5'
              cols='50'
              onChange={e => setExcited(e.target.value)}
            >
              {excited}
            </textarea>

            <textarea
              className='textarea is-info'
              rows='5'
              cols='50'
              onChange={e => setOneWord(e.target.value)}
            >
              {oneWord}
            </textarea>

            <textarea
              className='textarea is-info'
              rows='5'
              cols='50'
              onChange={e => setNeedsMe(e.target.value)}
            >
              {needsMe}
            </textarea>

            <textarea
              className='textarea is-info'
              rows='5'
              cols='50'
              onChange={e => setStressMeOut(e.target.value)}
            >
              {stressMeOut}
            </textarea>

            <textarea
              className='textarea is-info'
              rows='5'
              cols='50'
              onChange={e => setBestSelf(e.target.value)}
            >
              {bestSelf}
            </textarea>

            <textarea
              className='textarea is-info'
              rows='5'
              cols='50'
              onChange={e => setSomeoneToSurprise(e.target.value)}
            >
              {someoneToSurprise}
            </textarea>

            <textarea
              className='textarea is-info'
              rows='5'
              cols='50'
              onChange={e => setExcellence(e.target.value)}
            >
              {excellence}
            </textarea>

            <textarea
              className='textarea is-info'
              rows='5'
              cols='50'
              onClick={e => setBoldAction(e.target.value)}
            >
              {boldAction}
            </textarea>

            <textarea
              className='textarea is-info'
              rows='5'
              cols='50'
              onClick={e => setLifeMeta(e.target.value)}
            >
              {lifeMeta}
            </textarea>

            <textarea
              className='textarea is-info'
              rows='5'
              cols='50'
              onClick={e => setFutureProjects(e.target.value)}
            >
              {futureProjects}
            </textarea>

            <textarea
              className='textarea is-info'
              rows='5'
              cols='50'
              onClick={e => setSuccessfulToday(e.target.value)}
            >
              {successfulToday}
            </textarea>

            <textarea
              className='textarea is-info '
              rows='5'
              cols='50'
              onClick={e => setTopPriorities(e.target.value)}
            >
              {topPriorities}
            </textarea>

            {/* <textarea
              rows='5'
              cols='50'
              onClick={e => setMustBeDone(e.target.value)}
            >
              {mustBeDoneToday
                ? mustBeDoneToday
                : "Tasks that must be done today"}
            </textarea> */}

            {/* <textarea rows='5' cols='50' onClick={e => set(e.target.value)}>
              {replace ? replace : "persons to connect with"}
            </textarea> */}

            <input class='button is-light' type='submit' value='Submit' />
          </section>

          <section class='section is-info'>
            <label>
              <h3>Already have a journal entry written?</h3>
              <h4>Upload that file</h4>
              <input type='file'></input>
            </label>
          </section>
        </form>
      </section>
    </>
  )
}

export default Journal
