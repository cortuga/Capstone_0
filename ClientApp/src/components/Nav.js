import react from "react"
import { Link } from "react-router-dom"

import React from "react"

const nav = () => {
  return (
    <>
      <nav>
        <h3>Nav bar</h3>
        <ul className='nav-links'>
          <Link to='/components/LandingPage'>
            <li>Home</li>
          </Link>
          <Link to='/components/Journal'>
            <li>Journal</li>
          </Link>
          <Link to='/components/Todos'>
            <li>To-do</li>
          </Link>
          <Link to='/components/Calender'>
            <li>Calender</li>
          </Link>
          <Link to='/components/LifeGoals'>
            <li>Life Goals</li>
          </Link>
          <Link to='/components/Profile'>
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default nav
