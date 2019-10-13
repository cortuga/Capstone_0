import React from "react"
import { Link } from "react-router-dom"
import Nav from "./Nav"
import JournalHistory from "./JournalHistory"

const LandingPage = () => {
  return (
    <div>
      {/* <Nav /> */}
      <h1>Welcome!</h1>

      <h2>Defining your day and your future:</h2>
      <p>
        I define high performance as reaching your personal goals with a
        balanced life, maintaining well being and positive relationships. That
        last part is important. People often assume you have to compromise your
        health or relationships in order to succeed but I disagree. I believe
        with the right habits and daily pracitices, you can achieve your dreams,
        out perform your yesterdays and grow faster then you ever imagined, and
        strive with true joy and fulfillment. Of course everyone wants something
        along these lines. But few people create the right mindset, set real
        priorities, define what's meaningful to them, and review their day and
        performance in measurable ways that can propel their growth. I've found
        that so many people don't ever work on the basic planning and
        prioritization strageties that so often lead to long-term success or
        self cultivation. That's why I created The Compass. I wanted you to have
        a proven and strategic approach to developing yourself and achieving
        your goals. I wanted to help instill thinking patterns and practices of
        some of the most high performing individuals in the world today and
        bring some of that to your daily life.
      </p>

      <Link to='/NewUserPage'>New User</Link>

      <section>
        <h2>Previous Mindset / Journal</h2>
        <JournalHistory />
      </section>
    </div>
  )
}

export default LandingPage
