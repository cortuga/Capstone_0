import react from "react"
import { Link } from "react-router-dom"
import Auth from "../auth"

import React from "react"

const nav = () => {
  return (
    <>
      <nav>
        <h3>Nav bar</h3>
        <ul className='nav-links'>
          <Link to='/LandingPage'>
            <li>Home</li>
          </Link>
          <Link to='/Journal'>
            <li>Journal</li>
          </Link>
          <Link to='/Todos'>
            <li>To-do</li>
          </Link>
          <Link to='/Calender'>
            <li>Calender</li>
          </Link>
          <Link to='/LifeGoals'>
            <li>Life Goals</li>
          </Link>
          <Link to='/Profile'>
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default nav
