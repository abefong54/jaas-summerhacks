import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import ClassDropdown from '../../components/ClassDropdown/ClassDropdown';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Upload from './Upload/upload';
import ClassTable from '../../components/ClassTable/ClassTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
    root: {
    },
    welcomeBanner:{
        border:'5px solid lightskyblue',
        borderRadius: '5px',
        padding:'2em',
        marginLeft:'2em',
        marginBottom:'2em',
    },
    dashboardBody:{
        border:'5px solid lightskyblue',
        borderRadius: '5px',
        marginLeft:'40px',
        marginRight:'40px',
        paddingBottom:'200px',
        elevation:'above',
    }
  });
var testProfessor = 'Apple';


// Create context object
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


export default function Dashboard(){
    const classes= useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div style={{paddingTop:'100px' }}>
                <Grid container spacing={12}>
                    <Grid item xs={4}>
                        <Paper className={classes.welcomeBanner} elevation={3}>
                            <div> Welcome back, Professor {testProfessor}</div>
                        </Paper> 
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <AppContext.Provider value={{ state, dispatch }}>
                        <Grid item xs={4}>
                            <Grid container spacing={12}>
                                <Grid item xs={4}>
                                    <ClassDropdown/>
                                </Grid>
                                <Grid item xs={4}>
                                    <Upload />
                                </Grid>
                                {/* <Grid item xs={4}>
                                    <Link to="/analytics" ><button>Take me to dashboard</button></Link>
                                </Grid> */}
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                           {/*  //style={{paddingLeft:'20px', paddingRight:'20px', paddingBottom:'20px',paddingBottom:'300px', elevation:'3' */}
                            <Paper className={classes.dashboardBody}elevation={3}>
                                {/* CREATE DASHBOARD COMPONENT */}
                                <ClassTable/>
                            </Paper>
                        </Grid>
                    </AppContext.Provider>
                </Grid>
        </div>  
    )
}


