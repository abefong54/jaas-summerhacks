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
    fetch('http://localhost:9000/resources/dashboard')
      .then(results => results.json())
      .then(data => {
        const classes = data.results;
        setClassList(data.classes);
      });
  }, []); // <-- Have to pass in [] here!
  
  return (
    <div>
      <Button className={stylings.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Class List
      </Button>
      <Menu color='black' id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          {classList.map((className, index) =>
            <MenuItem color='black'  key={index} value={className}>{className}</MenuItem>
          )}
      </Menu>
    </div>
  );
}