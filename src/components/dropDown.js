import React from 'react'
import PropTypes from 'prop-types'

export const DropDown = ({addresses, changeDefaultAddress}) => {


  return (
    <select className="custom-select"  name="Accounts" onChange={(e)=>{changeDefaultAddress(e.target.value)}}>
      <option>Choose...</option>

      {addresses.map((d, i)=>{
        return <option key={i} value={d}>{d}</option>
      })}
  </select>
)}


export default DropDown
