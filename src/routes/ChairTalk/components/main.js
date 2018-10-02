import React from 'react'
import PropTypes from 'prop-types'
import { Pannel2 } from '../../../components/Pannel';
import Footer from "../../../components/Footer"
import chairImg from "../../../Images/TalkWithChair2.png"
import "./flier.scss"

var style = {
  width: "100%",
  height: "1000px",
  textAlign: "center",
}



export const Page = ({}) => (

  <div style={{ margin: '0 auto' }} >

    <Pannel2 header="Talk with the chair" text=""/>

    <div className="FlierPannel" style={style}>
      stuff 
      <img src= {chairImg} /> 
    </div>
    
    <Footer />
  </div>
)

Page.propTypes = {
}

export default Page
