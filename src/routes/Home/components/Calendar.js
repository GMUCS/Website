import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css"
import events from "./Events"

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

export const MyCalendar = ({ localizer }) => (
  <BigCalendar
    events={events}
    views={['month',  'week', 'day', 'agenda']}
    step={60}
    showMultiDayTimes
    //max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
    //defaultDate={new Date(2015, 3, 1)}
    //localizer={localizer}
  />
)

