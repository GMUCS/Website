import React from 'react'
import PropTypes from 'prop-types'
import { Pannel2 } from '../../../components/Pannel';
import Footer from "../../../components/Footer"
import chairImg from "../../../Images/TalkWithChair2.png"
export const Page = ({}) => (

  <div style={{ margin: '0 auto' }} >

    <Pannel2 header="Talk with the chair" text=""/>
    <img src= {chairImg} /> 

    <Footer />
  </div>
)
Page.propTypes = {
}

export default Page
