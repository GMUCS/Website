import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import "./Home.scss";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Toggle } from 'material-ui/Toggle'
import muiThemeable from 'material-ui/styles/muiThemeable';
import { black } from 'material-ui/styles/colors';
import PlaceHolder from '../../../Images/PlaceHolder.png'
import Cards from "./Cards"
import Footer from "../../../components/Footer"
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Pannel2, Pannel3 } from "../../../components/Pannel"

let Panels = (props) => {

  return (
    <div className="pannel">
      <Pannel2
        header="Hello MACS!"
        text="MACS is all about community and computer science education and excellence"
      />
      <Cards />
      <Footer />
    </div>
  )
}

export const Page = (props) => {

  return (

    <div style={{ margin: '0 auto' }} >

      <Panels />
    </div>
  )
}


Page.propTypes = {
}

export default Page
