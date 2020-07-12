import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AppContext } from '../../containers/Dashboard/Dashboard';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    //width:"auto", WORKS IN RESPONSIVENESS, SO NOT NEEDED.
    tableLayout:"auto",
    backgroundColor:'lightskyblue',
    fixedHeader:"false",
    border:"2px solid white",
    elevation:"5"
    
    
  },
  header:{
    backgroundColor:'lightskyblue',
    color:'white',
  }
});


export default function ClassTable() {
  const classes = useStyles();
  const {state, dispatch} = useContext(AppContext);

  const changeInputValue = (newValue) => {
      dispatch({ type: 'UPDATE_INPUT', data: newValue,});
  };
  
  var count = Object.keys(state.videoClassList).length;

  if (count == 0) {

    return(
      <div>
          Please select a class to view data.
      </div>
    )

  } else {

    var videos = [];
    Object.keys(state.videoClassList).forEach(function(key) {
        videos.push(key);
    });
    
    return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow style={{backgroundColor:'black'}}>
                <TableCell style={{color:'lightskyblue'}}width="200" align="left">LECTURE NAME</TableCell>
                <TableCell style={{color:'lightskyblue'}}width="200" >CLASS NAME</TableCell>
                <TableCell style={{color:'lightskyblue'}}width="200" align="left">LECTURE DAY</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {videos.map((key) => (
                  <TableRow key={key}>
                    {/* VIDEO NAME */}
                      <TableCell align="left" > 
                          <Link to={"/analytics/"+key}> 
                              {state.videoClassList[key].lecture_name} 
                          </Link>
                      </TableCell>
                      {/* CLASS NAME */}
                      <TableCell component="th" scope="row">
                        {state.videoClassList[key].class_name}
                      </TableCell>
                      {/* CLASS DATE */}
                      <TableCell align="left">
                          {state.videoClassList[key].lecture_day}
                          
                      </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
    );
  }
}
