import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AppContext } from '../../containers/Dashboard/Dashboard'

const useStyles = makeStyles({
  table: {
    //width:"auto", WORKS IN RESPONSIVENESS, SO NOT NEEDED.
    tableLayout:"auto",
    backgroundColor:'lightskyblue',
    fixedHeader:"false"
  },
  
});
var class_name="BIO";
var lecture_day="12-12-2020";
var lecture_name="The Nervous System";

//FIGURE THIS OUT LATER
function createData(cname, day , lname) {
  return { };
}

const rows = [
    //SAMPLE DATA
    
  
];

export default function ClassTable() {
  const classes = useStyles();


  const {state, dispatch} = useContext(AppContext);
  const changeInputValue = (newValue) => {

      dispatch({ type: 'UPDATE_INPUT', data: newValue,});
  };
  
  var count = Object.keys(state.videoClassList).length;

  if (count == 0) {
    return(
      <div>nothing</div>
    )
  }
  else {

    var classKeys = [];
    Object.keys(state.videoClassList).forEach(function(key) {
        classKeys.push(key);
    });;
    return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width="200" >Class Name</TableCell>
                <TableCell width="200" align="left">Lecture Day</TableCell>
                <TableCell width="200" align="left">Lecture Name</TableCell>
            
              </TableRow>
            </TableHead>
            <TableBody>
              {classKeys.map((key) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {state.videoClassList[key].class_name}
                  </TableCell>
                  <TableCell align="left">{state.videoClassList[key].lecture_day}</TableCell>
                  <TableCell align="left">{state.videoClassList[key].lecture_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
  }
}
