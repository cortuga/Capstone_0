import React from "react"
import { Link } from "react-router-dom"

import Auth from "../auth"

const nav = () => {
  return (
    <>
      <nav class='tabs is-fluid'>
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

        <ul className='nav-links navbar has-text-centered nav-menu is-active is-mobile  is-fluid'>
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

        {/* Later iterations will be utilizing Auth0 / Firebase :) */}
        <div class='navbar-end'>
          <div class='navbar-item'>
            <div class='buttons'>
              <Link to='/NewUserPage' class='button is-info'>
                <strong>Sign up! </strong>
              </Link>
              <a class='button is-light'>Log in</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default nav
