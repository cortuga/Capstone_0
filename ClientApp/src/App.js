import React, { Component } from "react"
// import { Home } from './components/Home'
// import { FetchData } from './components/FetchData'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Journal from "./components/Journal"
import Todos from "./components/Todos"
import Calender from "./components/Calender"
import LifeGoals from "./components/LifeGoals"
import Profile from "./components/Profile"
import axios from "axios"
import LandingPage from "./components/LandingPage"
import NewUserPage from "./components/NewUserPage"
import auth from "./auth"

export default class App extends Component {
  static displayName = App.name
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/Journal' component={Journal} />
            <Route path='/Todos' component={Todos} />
            <Route path='/Calender' component={Calender} />
            <Route path='/LifeGoals' component={LifeGoals} />
            <Route path='/Profile' component={Profile} />
            <Route path='/NewUserPage' component={NewUserPage} />
            <Route path='/login' render={() => auth.login()} />
            <Route
              exact
              path='/logout'
              render={() => {
                auth.logout()
                return <p />
              }}
            />
            <Route
              exact
              path='/callback'
              render={() => {
                auth.handleAuthentication(() => {
                  // // NOTE: Uncomment the following lines for using axios
                  // //
                  // // Set the axios authentication headers
                  axios.defaults.headers.common = {
                    Authorization: auth.authorizationHeader()
                  }
                })
                return <p />
              }}
            />
          </Switch>
        </Router>
      </>
    )
  }
}
