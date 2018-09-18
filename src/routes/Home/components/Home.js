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
import {MyCalendar} from "./Calendar";
import config from "../../../config"




let Panels = (props) => {
  return (
    <div className="pannel">

      <Pannel2
        header={"Hello " + config.title + "!"}
        text={config.title + " is all about community and computer science education and excellence"}
      />

      <Pannel3
      header= {config.title + " stuff"}
      text="Come learn about what we are doing!"
      />
      <div style = {{height:"670px", display:"flex", flexDirection: "column", padding: 40, margin: "auto", width: "100%", maxWidth:"1280px"}}> 
        <MyCalendar />
      </div>

      
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

//<Cards />
Page.propTypes = {
}

export default Page
