import React, { useState, useEffect, useContext } from "react";
import { AppContext } from '../../containers/Dashboard/Dashboard'

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuLink from '@material-ui/core/MenuItem';
import { keys } from "@material-ui/core/styles/createBreakpoints";


export default function ClassDropdown() {

  const {state, dispatch} = useContext(AppContext);

  const changeInputValue = (newValue) => {
    async function fetchVideos() {
        const fullResponse = await fetch(`http://localhost:9000/resources/dashboard/class-videos?classname=${newValue}`)
        const response = await fullResponse.json();
        console.log("Dispatching" + newValue);
        console.log("data response");
        console.log(response);
        dispatch({ type: 'UPDATE_INPUT', data: response,});
    }
    fetchVideos();
  };
  

  const [page] = React.useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [classList, setClassList] = React.useState({});
  const [keyList, setKeysList] = React.useState([]);


  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };


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
  
    return (
    <div>
        <Button variant="contained" color="primary" onClick={handleClick}>
            CLASSES
        </Button>
        <Menu color='black' id="simple-menu" anchorEl={anchorEl} getContentAnchorEl={null} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} transformOrigin={{ vertical: "top", horizontal: "center" }}keepMounted open={Boolean(anchorEl)} onClose={handleClose} drop={'right'}>
            {keyList.map((className, index) =>
              <MenuItem color='black' key={className} value={className} onClick={() => changeInputValue(className)}>{className}</MenuItem>
            )}
        </Menu>
    </div>
  );
}