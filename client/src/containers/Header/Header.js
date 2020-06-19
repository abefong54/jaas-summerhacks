import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:'red',
    width:"100%"
    

  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'black'
  },
  title: {
    flexGrow: 1,
    color:'black'
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: 'lightskyblue' }} position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome
          </Typography>
          <Button color="black" >Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}







/* 
import React from 'react';
import './Header.css';
import { makeStyles, ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      background: 'lightskyblue',
      border: 0,
      borderRadius: 3,
      
      color: 'white',
      fontWeight:'bold',
      height: 50,
      width:100,
      paddingTop: '0 50px',
      
    },
  });

export default function Header(){
    const stylings = useStyles();
    return(
        <div className="NavBar header_body">
                    <div className="user">
                        <div className="buttonsHeader">
                        <button className={stylings.root}>Settings</button>
                        <button className={stylings.root}>Log Out</button>
                        </div>
                    <h1>Welcome!</h1>
                    </div>
                </div>


    )
} */
/* class Header extends React.Component{
    render(){
 */
       /*  return(
                
                <div className="NavBar header_body">
                    <div className="user">
                        <div className="buttonsHeader">
                        <button className="Settings">Settings</button>
                        <button className="Logout">Log Out</button>
                        </div>
                    <h1>Welcome!</h1>
                    </div>
                </div>
        );
    }
} */

/* export default Header; */
