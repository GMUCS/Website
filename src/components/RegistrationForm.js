import React from 'react'
import PropTypes from 'prop-types'



export const Form = ({ onSubmit, onChange, type, text, placeholder }) => {

  const _onChange = (e) => {
    onChange(type, e.target.value);
  }

  const _onSubmit = () => {
    onSubmit(type);
  }

  return (
    <div >
      <div className="input-group mb-3">
        <input className="form-control" placeholder={placeholder} onChange={(e) => _onChange(e)} />
        <div className="input-group-append" >
          <button className="btn btn-outline-secondary input-group-text" id="inputGroup-sizing-default" onClick={()=>_onSubmit()}>{text}</button>
       </div>
      </div>
    </div>
  )}



export default Form
