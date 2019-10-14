import React, { Component } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import "./index.scss"

// Google Calender api

const localizer = momentLocalizer(moment)
// Purposely left myEventsList blank to avoid error. Will Fix later!!!!
const myEventsList = []

export class Calender extends Component {
  render() {
    return (
      <>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor='start'
          endAccessor='end'
        />
      </>
    )
  }
}

export default Calender
