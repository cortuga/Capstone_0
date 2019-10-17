import React from "react"
import { Link } from "react-router-dom"
import Nav from "./Nav"
import JournalHistory from "./JournalHistory"

const LandingPage = () => {
  return (
    <div class='section'>
      {/* <Nav /> */}
      <h1 className='has-text-centered title hero'>Welcome!</h1>

      <div class='container'>
        <h2 class='subtitle'>Defining your day and your future:</h2>
      </div>

      <p class='section'>
        I define <strong>high performance</strong> as reaching your personal
        goals with a balanced life, maintaining well being and positive
        relationships. That last part is important. People often assume you have
        to compromise your health or relationships in order to succeed in high
        degrees but I disagree. I believe with the right habits and daily
        practices, you can{" "}
        <strong>
          achieve your dreams, out perform your yesterdays and grow faster{" "}
        </strong>{" "}
        then you ever imagined and strive with true joy and fulfillment. Of
        course everyone wants something along these lines. But few people create
        the right mindset, set real priorities, define what's meaningful to
        them, and review their day and performance in measurable ways that can
        propel their growth. I've found that so many people don't ever work on
        the basic planning and prioritization strategies that so often lead to
        long-term success or self cultivation. That's why I created The Compass.
        I wanted you to have a proven and strategic approach to developing
        yourself and achieving your goals. I wanted to help instill{" "}
        <strong>thinking patterns</strong> and practices of some of the most
        high performing individuals in the world today and bring some of that to
        your daily life.
      </p>
      <section class='section container'>
        {/* <button class='button is light'>
          <Link to='/NewUserPage'>New User</Link>
        </button> */}
      </section>

      <section class='section'>
        <h2 class='container subtitle has-text-centered '>
          Previous Mindset / Journal
        </h2>
        <JournalHistory />
      </section>
    </div>
  )
}

export default LandingPage
