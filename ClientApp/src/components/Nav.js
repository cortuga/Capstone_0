import React from "react"
import { Link } from "react-router-dom"

import Auth from "../auth"

const nav = () => {
  return (
    <>
      <nav class='tabs'>
        <section class='hero'>
          <div class='hero-body'>
            <div class='container'>
              <h1 class='title'>Compass</h1>
              <h2 class='subtitle'>
                Defining your Day to Navigate your Future
              </h2>
            </div>
          </div>
        </section>

        <ul className='nav-links has-text-centered nav-menu'>
          <Link to='/'>
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
