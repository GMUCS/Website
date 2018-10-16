
import React from 'react'
import { getMuiTheme } from "material-ui/styles";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const style = {
    margin: 0,
    width: "100%",
    textAlign: "center",
    padding: "10em",
}

export const Pannel1 = ({text, header, children}) => {

    return (
    <div style={{...style, backgroundColor: getMuiTheme().palette.primary1Color}}>
    <h1>{header}</h1>
    <p>{text}</p>
  </div>
    )
}
export const Pannel2 = ({text, header, children}) => {

    return (
    <div style={{...style, backgroundColor: getMuiTheme().palette.primary2Color}}>
    <h1>{header}</h1>
    <p>{text}</p>
  </div>
    )
}

export const Pannel3 = ({text, header, children, id}) => {

    return (
    <div style={{...style, backgroundColor: getMuiTheme().palette.primary3Color}} id={id}>
    <h1>{header}</h1>
    <p>{text}</p>
  </div>
    )
}


export const EventPannel = ({backgroundImage}) => {
    
    const style = {

      margin: 0,
      width: "100%",
      height: "20em"
    }

    return (

      <div style={{...style}}>
        <Card>
        <CardMedia
          overlay={<CardTitle title="Our Upcomming Events" />}
        >
          <img src={backgroundImage} alt="" className="cardImages" style={{height: "20em"}} />

        </CardMedia>
        <CardTitle
          expandable={true}
          subtitle="Subtitle"
        >
          BlockChain
      </CardTitle>
      </Card>
      </div>

    )
}