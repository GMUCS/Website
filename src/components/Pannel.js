
import React from 'react'
import { getMuiTheme } from "material-ui/styles";


const style = {
    margin: 0,
    height: '10em',
    width: "100%",
    textAlign: "center",
    padding: "10em",
    paddingBottom: "15em",
    height: '10em',

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
