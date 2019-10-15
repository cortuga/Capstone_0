import React, { useState } from "react"
import axios from "axios"

const Journal = () => {
  const [excited, setExcited] = useState("")
  const [oneWord, setOneWord] = useState("") //not set up
  const [needsMe, setNeedsMe] = useState("")
  const [stressMeOut, setStressMeOut] = useState("")
  const [bestSelf, setBestSelf] = useState("")
  const [someoneToSurprise, setSomeoneToSurprise] = useState("")
  const [excellence, setExcellence] = useState("")
  const [boldAction, setBoldAction] = useState("")

  const [lifeMeta, setLifeMeta] = useState("")
  const [futureProjects, setFutureProjects] = useState("")
  const [successfulToday, setSuccessfulToday] = useState("")
  const [todaysMessage, setTodaysMessage] = useState("")
  const [topPriorities, setTopPriorities] = useState("")
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
      <section className='has-text-centered'>
        <div>
          <h2 class='subtitle'>Morning Mindset:</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <section>
            <label>
              <textarea
                className='textarea'
                rows='5'
                cols='50'
                onChange={e => setTodaysMessage(e.target.value)}
              >
                {todaysMessage ? todaysMessage : "Today's Message to Myself"}
              </textarea>
            </label>

            {/* the question above doesn't have a place in the model. Going to make the other 3 ree pillers part of the todo section */}
            {/* <textarea rows='5' cols='50'>
              Today's Top 3 Goals / Priorities...
            </textarea> */}
            {/* Want to make the Top 3 goals passed to the Todos component */}

            <textarea
              className='textarea'
              rows='5'
              cols='50'
              onChange={e => setExcited(e.target.value)}
            >
              {excited
                ? excited
                : "One Thing I can get excited about today is..."}
            </textarea>

            <textarea
              className='textarea'
              rows='5'
              cols='50'
              onChange={e => setOneWord(e.target.value)}
            >
              {oneWord
                ? oneWord
                : " If one word could describe the kind of person I want to be today, then that word is... and why I chose it..."}
            </textarea>

            <textarea
              className='textarea'
              rows='5'
              cols='50'
              onChange={e => setNeedsMe(e.target.value)}
            >
              {needsMe
                ? needsMe
                : "Someone who need me on my A game today is..."}
            </textarea>

            <textarea
              className='textarea'
              rows='5'
              cols='50'
              onChange={e => setStressMeOut(e.target.value)}
            >
              {stressMeOut
                ? stressMeOut
                : "A situation that might stress me out or trip me up today..."}
            </textarea>

            <textarea
              className='textarea'
              rows='5'
              cols='50'
              onChange={e => setBestSelf(e.target.value)}
            >
              {bestSelf
                ? bestSelf
                : "...and the way that my best self would deal with this is..."}
            </textarea>

            <textarea
              className='textarea'
              rows='5'
              cols='50'
              onChange={e => setSomeoneToSurprise(e.target.value)}
            >
              {someoneToSurprise
                ? someoneToSurprise
                : "Someone I could surprise with a note, gift,or sign of appreciation is..."}
            </textarea>

            <textarea
              className='textarea'
              rows='5'
              cols='50'
              onChange={e => setExcellence(e.target.value)}
            >
              {excellence
                ? excellence
                : "One action I could take today to demonstrate excellence or real value is..."}
            </textarea>

            <textarea
              className='textarea'
              rows='5'
              cols='50'
              onClick={e => setBoldAction(e.target.value)}
            >
              {boldAction
                ? boldAction
                : "One bold action I could take today is..."}
            </textarea>

            <textarea
              className='textarea'
              rows='5'
              cols='50'
              onClick={e => setLifeMeta(e.target.value)}
            >
              {lifeMeta
                ? lifeMeta
                : "If I highest self was looking at my life from a high level, I would tell myself that..."}
            </textarea>

            <textarea
              className='textarea'
              rows='5'
              cols='50'
              onClick={e => setFutureProjects(e.target.value)}
            >
              {futureProjects
                ? futureProjects
                : "The big projects I have to keep in mind that I want to take on, even if I can't act toward them today, are..."}
            </textarea>

            <textarea
              className='textarea'
              rows='5'
              cols='50'
              onClick={e => setSuccessfulToday(e.target.value)}
            >
              {successfulToday
                ? successfulToday
                : "I would know that today was a great success if at the end of the day I did or felt these things"}
            </textarea>

            <textarea
              className='textarea'
              rows='5'
              cols='50'
              onClick={e => setTopPriorities(e.target.value)}
            >
              {topPriorities
                ? topPriorities
                : "My top 3 priorities or goals today are..."}
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
      </section>
    </>
  )
}

export default Journal
