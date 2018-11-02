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
import { Pannel2, Pannel3, EventPannel } from "../../../components/Pannel"
import {MyCalendar} from "./Calendar";
import config from "../../../config"
import {AutoRotatingCarousel, Slide} from "./material-auto-rotating-carousel/src"



let Panels = ({props}) => {
  return (
    <div className="pannel">

    <EventPannel backgroundImage={props.eventsPannelImage} />
    <Cards props={props}/>
      <div style = {{height:"670px", display:"flex", flexDirection: "column", padding: 40, margin: "auto", width: "100%", maxWidth:"1280px"}}> 
        <MyCalendar onEventClick={props.onEventChange} events={props.events}/>
      </div>
      
      <Pannel2
        header={"Hello " + config.title + "!"}
        text={config.title + " is all about community and computer science education and community"}
      />
      
      <Footer />
    </div>
  )
}

export const Page = (props) => {
  return (
    <div style={{ margin: '0 auto' }} >
      <Panels props={props}/>
    </div>
  )
}


Page.propTypes = {
}

export default Page



/*

<div style={{ position: 'relative', width: "100%", height: 800 }}>
      <AutoRotatingCarousel
        label="Get started"
        open = {true}
        mobile = {false}
        landscape = {true}
      >
        <Slide
          media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />}
          mediaBackgroundStyle={{ backgroundColor: "blue" }}
          contentStyle={{ backgroundColor: "black" }}
          title="This is a very cool feature"
          subtitle="Just using this will blow your mind."
        />
        <Slide
          media={<img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />}
          mediaBackgroundStyle={{ backgroundColor: "blue" }}
          contentStyle={{ backgroundColor: "black" }}
          title="Ever wanted to be popular?"
          subtitle="Well just mix two colors and your are good to go!"
        />
        
    </AutoRotatingCarousel>

</div>


      <Pannel3
      header= {config.title + " stuff"}
      text="Come learn about what we are doing!"
      />


*/