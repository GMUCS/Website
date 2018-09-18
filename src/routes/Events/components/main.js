import React from 'react'
import PropTypes from 'prop-types'
import '../../Home/components/Home.scss'
import { Pannel2, Pannel3 } from '../../../components/Pannel';
import Footer from "../../../components/Footer";
import Cards from "./Cards"

let Panels = (props) => {

  return (
    <div className="pannel">

      <Pannel2
        header="Learn more about upcoming events"
       />
      <Cards/>
      <Footer />

    </div>
  )
}


export const Page = ({ }) => (
  <div style={{ margin: '0 auto' }} >

    <Panels />


  </div>
)

Page.propTypes = {
}

export default Page
