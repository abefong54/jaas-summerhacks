import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
  /*marginRight: theme.spacing(1),*/
    color:'lightskyblue',
   
  },
  title: {
    flexGrow: 1,
    color:'lightskyblue'
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: 'black' }} position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome
          </Typography>
          <Button className={classes.menuButton} >Settings</Button>
          <Link to="/" className={classes.menuButton} >SIGN OUT</Link>
          {/* <Button Link to= "/ "className={classes.menuButton} >Sign Out</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
