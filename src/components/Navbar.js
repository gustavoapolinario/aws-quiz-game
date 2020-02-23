import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";

const styles = theme => ({
    grow: {
      flexGrow: 1,
    },
    button: {
        color: '#FFF'
    },
    searchIcon: {
        cursor: 'pointer',
    },
    appBar: {
        marginBottom: 20,
    },
    appBarHolder: {
      marginBottom: 80,
    },
    logo: {
        width: 115,
        height: 115,
        margin: 'auto',
        display: 'block',
        background: "#666",
        border: "10px solid #666",
        borderBottom: "3px solid #666",
    },
    logoHolder: {
        //background: "linear-gradient(0deg, #666 0%, #666 26%, #36b32b 25%, #36b32b 100%)",
        padding: 15,
        borderBottom: '1px solid #ccc',
    },
    section : {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    badge: {
        top: '50%',
        right: -3,
    },
    icon: {
        color: '#FFF'
    },
    userName: {
        textAlign: 'center',
        borderBottom: '1px solid #ccc',
        paddingLeft: 5,
        paddingTight: 5,
        paddingBottom: 10,
    },
});

class NavBar extends React.Component {
    state = {
        open: false,
        menu: [
            {
                name: 'Busca',
                url: '/home',
                icon: <SearchIcon />,
            },
        ],
    };
    
    toggleDrawer = (newPos) => {
        this.setState({
            open: !this.state.open
        });
    };

    goToCart = () => {
        this.props.history.push('/carrinho/')
    };

    logout = _ => {
        // const userContext = this.context;
        // userContext.user.logout()
        this.props.history.push('/')
    }

    render() {
        const { classes } = this.props;
        
        return(
            <div className={classes.appBarHolder}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        {/* <IconButton
                            edge="start"
                            color="inherit"
                            onClick={this.toggleDrawer}
                            >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            AWS Quiz Game
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open} onClose={this.toggleDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer}
                        onKeyDown={this.toggleDrawer}
                    >
                        <List>
                            {this.state.menu.map(menu => (
                                <ListItem button key={menu.name} component={Link} to={menu.url}>
                                    <ListItemIcon>{menu.icon}</ListItemIcon>
                                    <ListItemText primary={menu.name} />
                                </ListItem>
                            ))}

                            <ListItem button key="Sair" onClick={this.logout}>
                                <ListItemIcon><ClearIcon /></ListItemIcon>
                                <ListItemText primary="Sair" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(NavBar));