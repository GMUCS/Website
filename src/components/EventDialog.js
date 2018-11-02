import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { getMuiTheme } from "material-ui/styles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


/*
      "open": false,
      "title": "TITLE",
      "sub-title": "SUBTITLE",
      "overlay-title": "OVERLAY_TITLE",
      "overlay-subtite": "OVERLAY_SUBTITLE",
      "image": placeholder,
      "id": 0,
      //allDay: true,
      start: new Date(2018, 8, 20, 9),
      end: new Date(2018, 8, 20, 15),
*/

const FullScreenDialog = ({event, onEventClose}) => {
    return (
      <div>
        <Dialog
          fullScreen
          open={event.open}
          onClose={onEventClose}
        >
          <AppBar style={{backgroundColor: getMuiTheme().palette.primary1Color}} >
            <Toolbar>
              <IconButton color="inherit" onClick={onEventClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

        <Paper elevation={1} style={{marginTop:70}}>
        <Typography varient="title" component="h1" align="center" >
          {event["title"]}
        </Typography>
        <Typography variant="subheading" component="h1" align="center">
        {event["sub-title"]}
        </Typography>
        </Paper>
        

    

        <Paper elevation={1} >

            
            <Typography component="h5" align="center">
            
            <Paper elevation={1} >
                  <Typography component="h5" align="center">

            <Typography component="p" align="center">
            Start Time:
                {event["start"].toString()}
            </Typography>
            <Typography component="p" align="center">
                End Time:
                {event["end"].toString()}
            </Typography>
            <Typography component="p" align="center" style={{marginLeft:20, marginRight:20}}>
                Description:
                {event["Description"]}
            </Typography>
            
                <img style={{height:"20em", width:"20em"}} src={event.image}></img>
            </Typography>
            </Paper>

                
            </Typography>

        </Paper>


        </Dialog>
      </div>
    );
  }

export default FullScreenDialog