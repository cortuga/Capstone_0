import React, { Component } from "react"
// import { Home } from './components/Home'
// import { FetchData } from './components/FetchData'
import Nav from "./components/Nav"
import Journal from "./components/Journal"
import Todos from "./components/Todos"
import Calender from "./components/Calender"
import LifeGoals from "./components/LifeGoals"
import Profile from "./components/Profile"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Testing from './Testing'
import LandingPage from "./components/LandingPage"
import NewUserPage from "./components/NewUserPage"
import "bulma"

export default class App extends Component {
  static displayName = App.name

  // state = {

  //    }

  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route
              exact
              path='/components/LandingPage'
              component={LandingPage}
            />
            <Route path='/components/Journal' component={Journal} />
            <Route path='/components/Todos' component={Todos} />
            <Route path='/components/Calender' component={Calender} />
            <Route path='/components/LifeGoals' component={LifeGoals} />
            <Route path='/components/Profile' component={Profile} />
            <Route
              path='/components/NewUserPage'
              component={NewUserPage}
            ></Route>
          </Switch>
        </Router>
      </>
    )
  }
}
