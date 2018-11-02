//import web3r from "../../../Modules/web3.js"
//import getBalance from "../../../Modules/AccountMethods.js"
import image from "../../../Images/events.jpg"
import placeholder from "../../../Images/PlaceHolder.png"
import dennysPic from "../../../Images/dennys.jpg"
import hackDayPic from "../../../Images/hackday.jpg"
// ------------------------------------
// Constants
// ------------------------------------
export const BALANCE = 'BALANCE'
export const CHANGE_EVENT = "CHANGE_EVENT"

export const onEventChange = (event) => {
  return {
    type: CHANGE_EVENT,
    event
  }
}

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [BALANCE] : (state, action) => {
    state.baseAccountBalance = action.value;
    return state
  },
  [CHANGE_EVENT]: (state, action) => {
    let n;
    state.events.map((event, i) => {
        if (event.id == action.event.id)
            n=i
    });
    state.events[n] = action.event
    return state;
  },
}

/*

      "open": false,
      "title": "TITLE",
      "sub-title": "SUBTITLE",
      "overlay-title": "OVERLAY_TITLE",
      "overlay-subtite": "OVERLAY_SUBTITLE",
      "image": placeholder,
      "id": 0,
      //allDay: true,
      start: new Date(2018, 8, 20, 9),
      end: new Date(2018, 8, 20, 15),
      "Description": "Stuff"
*/

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  eventsPannelImage: image,
  events: [
    {
      "open": false,
      "title": "Hackday",
      "sub-title": "At Startup Edmonton",
      "overlay-title": "Hackday!",
      "overlay-subtite": "Meet the community at large!",
      "image": hackDayPic,
      "id": 0,
      //allDay: true,
      start: new Date(2018, 10, 3, 9),
      end: new Date(2018, 10, 3, 17),
      "Description": "Hackday is startup edmonton's monthly event where anyone" +
      " who is passionate about technology can come and hang out, eat sandwitches, "+
      "drink coffee and work on cool projects! FREE SANDWITCHES AND COFFEE"
    },
    {
      "open": false,
      "title": "8:00am Dennys",
      "sub-title": "Pre Hackday fuel",
      "overlay-title": "Fuel For Hacking",
      "overlay-subtite": "Meet the club!",
      "image": dennysPic,
      "id": 1,
      //allDay: true,
      start: new Date(2018, 10, 3, 8),
      end: new Date(2018, 10, 3, 9),
      "Description": "Every hackday the computer science club goes Dennies to enjoy a meal and coffee at 8:00am. It's always a blast!"
    },
  ]
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(JSON.parse(JSON.stringify(state)), action) : state

}
