import react from "react"
import { Link } from "react-router-dom"

import React from "react"

const nav = () => {
  return (
    <>
      <nav>
        <h3>Nav bar</h3>
        <ul className='nav-links'>
          <Link to='/component/Journal'>
            <li>Journal</li>
          </Link>
          <Link to='/component/Todos'>
            <li>To-do</li>
          </Link>
          <Link to='/component/Calender'>
            <li>Calender</li>
          </Link>
          <Link to='/components/LifeGoals'>
            <li>Life Goals</li>
          </Link>
          <Link to='/component/Profile'>
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default nav
