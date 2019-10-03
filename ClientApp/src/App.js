import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { FetchData } from './components/FetchData'
import { Counter } from './components/Counter'

import Nav from "./components/Nav"
import Journal from "./components/Journal"
import Todos from "./components/Todos"
import Calender from "./components/Calender"
import LifeGoals from "./components/LifeGoals"
import Profile from "./components/Profile"

import Testing from './Testing'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default class App extends Component {
  static displayName = App.name

  state = {
  //   todos: [
  //     {
  //       id: Math.random() + 1,
  //       title: "Take out the trash",
  //       completed: false
  //     },
  //     {
  //       id: 2,
  //       title: "Dinner",
  //       completed: false
  //     },
  //     {
  //       id: 3,
  //       title: "Meeting with boss",
  //       completed: true
  //     }
  //   ]
  // }

  render() {
    return (
      <>
      <Router>
        <Nav />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/fetch-data" component={FetchData} />
            <Route path="/hello" component={Testing} />
          </Switch>
      </Router>
      </>
    )
  }
}
