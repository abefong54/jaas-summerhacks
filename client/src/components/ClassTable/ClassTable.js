import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  
  if (rows.length==0) {
    return(
      <div>Please select a class.</div>
    )
  }
  else {
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
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.cname}
                  </TableCell>
                  <TableCell align="left">{row.day}</TableCell>
                  <TableCell align="left">{row.lname}</TableCell>
            
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
  }
}
