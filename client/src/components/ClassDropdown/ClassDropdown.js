import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuLink from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    root: {
      background: 'black',
      border: 0,
      borderRadius: 5,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color:'#87cefa' ,
      height: 48,
      padding: '0 30px',
      weight: 'bold',
    },
  });


export default function ClassDropdown() {

  const stylings=useStyles();
  const [page] = React.useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [classList, setClassList] = React.useState([]);
  const [videoList, setVideoList] = React.useState([]);


  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = theme => ({
    root: {
      background: "blue",
    },
    whiteColor: {
      color: "white"
    }
  });

  React.useEffect(() => {
    fetch('http://localhost:9000/resources/dashboard/dropdown')
      .then(results => results.json())
      .then(data => {
        setClassList(data);
      });
  }, []);

  function sayHello(name) {
      fetch(`http://localhost:9000/resources/dashboard/class-videos?classname=${name}`)
      // .then(results => results.json())
      .then(results => {
        setVideoList(results);
      });
      console.log("Hello " + name);
      console.log("videolist " , videoList);
    }
    console.log("videlist ", videoList);
  
  return (
    <div>
      <Button className={stylings.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        CLASSES
      </Button>
      <Menu color='black' id="simple-menu" anchorEl={anchorEl} getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }}keepMounted open={Boolean(anchorEl)} onClose={handleClose} drop={'right'}>
          {classList.map((className, index) =>
            <MenuItem color='black'  key={index} value={className} onClick={() => sayHello(className)}>{className}</MenuItem>
          )}
      </Menu>
    </div>
  );
}