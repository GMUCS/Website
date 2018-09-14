//import web3r from "../../../Modules/web3.js"
//import getBalance from "../../../Modules/AccountMethods.js"

// ------------------------------------
// Constants
// ------------------------------------
export const BALANCE = 'BALANCE'

// ------------------------------------
// Actions
// ------------------------------------


export const getBalance = () => {
  return {
    type: BALANCE,
    value: 1
  }
}
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
  baseAccountBalance: "",
  //baseAccount: web3.eth.accounts[0] ? web3.eth.accounts[0] : web3r.eth.accounts[0]
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(JSON.parse(JSON.stringify(state)), action) : state

}
