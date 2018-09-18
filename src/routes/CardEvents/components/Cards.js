import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
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
