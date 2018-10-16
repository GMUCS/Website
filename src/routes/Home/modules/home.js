//import web3r from "../../../Modules/web3.js"
//import getBalance from "../../../Modules/AccountMethods.js"
import image from "../../../Images/events.jpg"
import placeholder from "../../../Images/PlaceHolder.png"
// ------------------------------------
// Constants
// ------------------------------------
export const BALANCE = 'BALANCE'

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
  }
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  eventsPannelImage: image,
  events: [
    {
      "Link": "",
      "title": "TITLE",
      "sub-title": "SUBTITLE",
      "overlay-title": "OVERLAY_TITLE",
      "overlay-subtite": "OVERLAY_SUBTITLE",
      "image": placeholder,
      "id": 0,
      //allDay: true,
      start: new Date(2018, 8, 20, 9),
      end: new Date(2018, 8, 20, 15),
    },
  ]
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(JSON.parse(JSON.stringify(state)), action) : state

}
