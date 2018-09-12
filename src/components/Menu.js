import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Avatar from 'material-ui/Avatar'
import { Link } from 'react-router'


const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >

        <MenuItem primaryText="Sign out" />
    </IconMenu>
);


const HamburgerNavs = (props) => (
    <IconMenu
        //{...props}
        iconButtonElement={
            <IconButton> <NavigationMenu /></IconButton>
        }>
        {props.items.map((d, i) => {
            return (<Link key={i} to={d.link}>
                <MenuItem primaryText={d.text} />
            </Link>)
        })}
    </IconMenu>
)

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = (event, logged) => {
        this.setState({ logged: logged });
    };

    render() {
        return (
            <div>
                <AppBar
                    title={<Link to="/" style={{ "color": "white", "textDecoration": "none" }}>{this.props.title}</Link>}
                    iconElementLeft={<HamburgerNavs items={this.props.menu} />}

                >
                        </AppBar>
            </div>
        );
    }
}

//iconElementRight={<Logged />}
//<div className="ethId">{web3.eth.defaultAccount == undefined ? <div> Sign in with <a href="https://metamask.io/">metamask</a></div> : <div><Avatar>Id</Avatar> {web3.eth.defaultAccount}</div> }</div>
               
export default AppBarExampleComposition;