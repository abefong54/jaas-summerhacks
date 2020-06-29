import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuLink from '@material-ui/core/MenuItem';
import { keys } from "@material-ui/core/styles/createBreakpoints";

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

  const [classList, setClassList] = React.useState({});
  const [keyList, setKeysList] = React.useState([]);


  const [videoList, setVideoList] = React.useState({});

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
        var classNames = [];
        Object.keys(data).forEach(function(key) {
            classNames.push(key);
        });
        setClassList(data);
        setKeysList(classNames);
      });
  }, []);

  function getClassVideoList(name) {
      fetch(`http://localhost:9000/resources/dashboard/class-videos?classname=${name}`)
      .then(results => results.json())
      .then(data => {
        console.log("heres your data");
        console.log(data);
        setVideoList(data);
      });
    }

    return (
    <div>
      <Button className={stylings.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        CLASSES
      </Button>
      <Menu color='black' id="simple-menu" anchorEl={anchorEl} getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }}keepMounted open={Boolean(anchorEl)} onClose={handleClose} drop={'right'}>
          {keyList.map((className, index) =>
            <MenuItem color='black' key={className} value={className} onClick={() => getClassVideoList(className)}>{className}</MenuItem>
          )}
      </Menu>
    </div>
  );
}