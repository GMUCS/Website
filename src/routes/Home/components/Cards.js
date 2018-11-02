import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import PlaceHolder from '../../../Images/PlaceHolder.png'
import Logo from '../../../Images/Logo.png'
import { Link } from 'react-router'
import { getMuiTheme } from 'material-ui/styles';
import EventDialog from "../../../components/EventDialog"


let Cards = (({props}) => {

  return (
    <div style = {{         
      paddingLeft: '0em',
      paddingRight: '0em',
      paddingBottom: '5em',
      paddingTop: '5em',
      backgroundColor: getMuiTheme().palette.primary3Color}}>

      {props.events.map((event, i)=>{
        return (
          <div key={i}  className="cards">
          <EventDialog event={event} 
          onEventClose={()=>{
            let changedEvent = event
            changedEvent.open = false
            return props.onEventChange(changedEvent)
          }}/>

          <div key={i} onClick={()=>{
            let changedEvent = event
            changedEvent.open = true
            return props.onEventChange(changedEvent)
          }}>
          
            <Card>
              <CardHeader title={event.title}
                subtitle={event["sub-title"]}>
              </CardHeader>
              <CardMedia
                overlay={<CardTitle title={event["overlay-title"]} subtitle={event["overlay-subtite"]} />}
              >
                <img src={event["image"]} alt="" className="cardImages" />
              </CardMedia>
              <CardTitle
                expandable={true}
                subtitle="temp"
              >
            </CardTitle>
            </Card>
        </div >
        </div>

      )
      })
    }
          </div>
  )
})

export default Cards

/*
      <div className="cards">
        <Link to="Calender">
          <Card>
            <CardHeader title="Calender"
              subtitle="Check our schedule">
            </CardHeader>
            <CardMedia
              overlay={<CardTitle title="Find out when and where events are happening" subtitle="everyone welcome" />}
            >
              <img src={PlaceHolder} alt="" className="cardImages" />
            </CardMedia>
            <CardTitle
              expandable={true}
              subtitle="Subtitle"
            >
          </CardTitle>
          </Card>
        </Link>
      </div >



      <div className="cards">
        <Link to="BlockChainInfo">
          <Card>
            <CardHeader title="Our BlockChain"
              subtitle="The crypto currency fueling GameCoin ">
            </CardHeader>
            <CardMedia
              overlay={<CardTitle title="Energy Friendly" subtitle="crypto powered apps" />}
            >
              <img src={PlaceHolder} alt="" className="cardImages" />
            </CardMedia>
            <CardTitle
              expandable={true}
              subtitle="Subtitle"
            >
              BlockChain
          </CardTitle>
          </Card>
        </Link>
      </div >

      <div className="cards">
        <Link to="WorldOfTextCraft">
          <Card>
            <CardHeader title="WorldOfTextCraft"
              subtitle="In game assets that you can transfer to other games!">
            </CardHeader>
            <CardMedia
              overlay={<CardTitle title="Blockchain powered games" subtitle="GameCoin as game currency!" />}
            >
              <img src={PlaceHolder} alt="" className="cardImages" />
            </CardMedia>
            <CardTitle
              expandable={true}
              subtitle="Subtitle"
            >
              BlockChain
          </CardTitle>
          </Card>
        </Link>
      </div >


      <div className="cards">
        <a href="blogs">
          <Card>
            <CardHeader title="Our Blogs"
              subtitle="Powered by opensource Ghost, opensource!">
            </CardHeader>
            <CardMedia
              overlay={<CardTitle title="Our Blogs" subtitle="Meet the team" />}
            >
              <img src={PlaceHolder} alt="" className="cardImages" />
            </CardMedia>
            <CardTitle
              expandable={true}
              subtitle="Subtitle"
            >
              BlockChain
          </CardTitle>
          </Card>

        </a>
      </div >


      */