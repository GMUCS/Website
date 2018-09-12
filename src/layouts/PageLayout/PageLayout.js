import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { white } from 'material-ui/styles/colors';
import DropDownMenu from '../../components/Menu'
import config from "./config"
import { lightBaseTheme } from 'material-ui/styles';

export const PageLayout = ({ children }) => {

  lightBaseTheme.palette.primary1Color = config.primary1Color
  lightBaseTheme.palette.primary2Color = config.primary2Color
  lightBaseTheme.palette.primary3Color = config.primary3Color
  
  return (
    <div>

      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <DropDownMenu {...config} />

            {children}

        </div>
      </MuiThemeProvider>

    </div>
  )
}
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
