// import React, { useReducer } from 'react';
// import { Link } from 'react-router-dom';
// import ClassDropdown from '../../components/ClassDropdown/ClassDropdown';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Container from '@material-ui/core/Container';
// import { makeStyles, withTheme } from '@material-ui/core/styles';
// import Upload from '../../components/Upload/Upload';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ClassTable from '../../components/ClassTable/ClassTable';

// const useStyles = makeStyles({
//     root: {
//     },
//     test: {
//         border: '5px solid lightskyblue',
//         borderRadius: '',
//     },
//     welcome: {
//         border: '5px solid lightskyblue',
//         borderRadius: '',
//         padding: '2em',
//         marginLeft: '2em',
//         marginBottom: '2em',
//     },
//     dashboardBody:{
//         border:'5px solid lightskyblue',
//         borderRadius: '5px',
//         marginLeft:'40px',
//         marginRight:'40px',
//         paddingBottom:'200px',
//         elevation:'above',
//         padding:'2em'
//     }
//   });
// var testProfessor = 'Apple';


// // Create context object
// export const AppContext = React.createContext();

// // Set up Initial State
// const initialState = {

//     videoClassList: [],

// };

// function reducer(state, action) {
//     switch (action.type) {
//         case 'UPDATE_INPUT':
//             return {
//                 videoClassList: action.data
//             };
//         default:
//             return initialState;
//     }
// }


// export default function Dashboard(){
//     const classes= useStyles();
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return(
//         <div style={{paddingTop:'100px' }}>
//             <AppContext.Provider value={{ state, dispatch }}>

//             <Grid container direction="row" justify="center" alignItems="center" spacing={10}>
//                 <Grid item xs={5}>
//                     <Container maxWidth="lg" fixed>
//                             <Paper className={classes.welcome} elevation={10}>
//                                 <div> Welcome back, Professor {testProfessor}</div>
//                             </Paper> 
//                     </Container>
//                 </Grid>

//                 <Grid item xs={5}>
//                     <Container maxWidth="lg" fixed>
//                         <Paper className={classes.welcome}  elevation={10}>
//                             <ClassDropdown/>
//                             <Upload />
//                         </Paper> 
//                     </Container>
//                 </Grid>
//                     {/* <Container maxWidth="lg" fixed>
//                         <Paper  className={classes.test}  elevation={10}>
//                             <Grid item xs={4}>
//                                 <ClassDropdown/>
//                             </Grid>
//                             <Grid item xs={4}>
//                                 <Upload />
//                             </Grid>
//                         </Paper> 
//                     </Container> */}
//             </Grid>
//             <Grid container direction="row" justify="center" alignItems="center" spacing={12}>
//                 <Grid item className={classes.test}>
//                     <ClassTable/>
//                 </Grid>
//             </Grid>
//             </AppContext.Provider>
//         </div>  
//         // <div style={{paddingTop:'100px' }}>
//                 /* <Grid container spacing={10}>
//                     <Grid item xs={4}>
//                         <Container maxWidth="lg">
//                             <Paper elevation={10}>
//                                 <div> Welcome back, Professor {testProfessor}</div>
//                             </Paper> 
//                         </Container>
//                     </Grid>
//                     <Grid item xs={4}>
//                     </Grid>
//                     <AppContext.Provider value={{ state, dispatch }}>
//                         <Grid item xs={4}>
//                             <Grid container spacing={10}>
//                                 <Grid item xs={4}>
//                                     <ClassDropdown/>
//                                 </Grid>
//                                 <Grid item xs={4}>
//                                     <Upload />
//                                 </Grid>
//                             </Grid>
//                         </Grid>
//                         <Grid item xs={10}>
//                             <Paper elevation={10}>
//                                 <ClassTable/>
//                             </Paper>
//                         </Grid>
//                     </AppContext.Provider>
//                 </Grid> */
//         // </div>  
//     )
// }

  
import React, { useReducer } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ClassDropdown from '../../components/ClassDropdown/ClassDropdown';
import Upload from '../../components/Upload/Upload';
import ClassTable from '../../components/ClassTable/ClassTable';

export const AppContext = React.createContext();
// Set up Initial State
const initialState = {
    videoClassList: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return {
                videoClassList: action.data
            };
        default:
            return initialState;
    }
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var testProfessor = 'Apple';

export default function Dashboard() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <AppContext.Provider value={{ state, dispatch }}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Welcome back, Professor {testProfessor}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Keeping up with your classes is a lot easier now,
              Let's see how you're doing.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                    <ClassDropdown/>
                </Grid>
                <Grid item>
                    <Upload />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={10}>
            <ClassTable/>
          </Grid>
        </Container>
        </AppContext.Provider>
      </main>
    </React.Fragment>
  );
}


