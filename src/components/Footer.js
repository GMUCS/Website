import muiThemeable from "material-ui/styles/muiThemeable";
import { getMuiTheme } from "material-ui/styles";
import React from 'react'

const style ={
    padding: "5em",
    width: "100%",
    textAlign: "center",
    color: getMuiTheme().palette.textColor
}


const footer = () => {
    return (
    <div style={{...style,     backgroundColor: getMuiTheme().palette.primary1Color}}>
    © 2018 Evan Giese
    Contact me at
    <div>evangiese77@gmail.com</div>
    </div>)
}

export default footer