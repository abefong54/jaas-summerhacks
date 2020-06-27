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

//FIGURE THIS OUT LATER
function createData(name, day , prof) {
  return { name, day, prof};
}

const rows = [
    //SAMPLE DATA
    createData('Bio 1203','Tuesday','Mr.Peterson')
  /* createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9), */
];

export default function ClassTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="200" >Lecture Name</TableCell>
            <TableCell width="200" align="left">Day</TableCell>
            <TableCell width="200" align="left">Teacher</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.day}</TableCell>
              <TableCell align="left">{row.prof}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
