import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black',
      height: 48,
      padding: '0 30px',
    },
  });


export default function ClassDropdown() {

  const stylings=useStyles();
  const [page] = React.useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [classList, setClassList] = React.useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
    fetch(
      // `https://jsonplaceholder.typicode.com/todos/1`,
      `http://localhost:9000/resources/dashboard`,
    )
      .then(response => response.json())
      .then(response => console.log(response.classes))
      // .then(response => setClassList(classList))
      .catch(error => console.log(error));
  }, [page]);

  console.log("Classlist");
  console.log(classList);

  return (
    <div>
      <Button className={stylings.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          {classList.map((className, index) =>
            <MenuItem key={index} value={index} primaryText={className} />
          )}
      </Menu>
    </div>
  );
}