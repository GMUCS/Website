import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import PlaceHolder from '../../../Images/PlaceHolder.png'
import Logo from '../../../Images/Logo.png'
import { Link } from 'react-router'
import { getMuiTheme } from 'material-ui/styles';
import { Pannel3 } from '../../../components/Pannel';
import Events from "../../Events"

let Cards = ((props) => {

  return (
    <div style = {{         
      paddingLeft: '0em',
      paddingRight: '0em',
      paddingBottom: '5em',
      paddingTop: '5em',
    backgroundColor: getMuiTheme().palette.primary3Color}}>

        {Events.map((d, i)=>{
           
            return d.renderCard ? (
            <div className="cards" key = {d.id}>
            <Link to={d.Link}>
              <Card>
                <CardHeader title={d.cardTitle}
                  subtitle={d.cardSubtitle}>
                </CardHeader>
                <CardMedia
                  overlay={<CardTitle title={d.cardOverlayTitle} subtitle={d.cardOverlaySubtitle} />}
                >
                  <img src={d.cardImage} alt="" className="cardImages" />
                </CardMedia>
                <CardTitle
                  expandable={true}
                  subtitle="Subtitle"
                >
              </CardTitle>
              </Card>
            </Link>
            </div > ) : null
        })}


    </div>

  )
})

export default Cards


/*

      <div className="cards">
        <Link to="ChairTalk">
          <Card>
            <CardHeader title="Talk With The Chair"
              subtitle="Learn what the Macewan CS department can do for you!">
            </CardHeader>
            <CardMedia
              overlay={<CardTitle title="Coffee & Cam" subtitle="everyone welcome" />}
            >
              <img src={TalkWithChairPic} alt="" className="cardImages" />
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