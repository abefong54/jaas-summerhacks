// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import OverallStatsGraph from '../../components/OverallStatsGraph/OverallStatsGraph';
// import Notebook from '../../components/Notebook/Notebook';
// import { Component } from 'react'
// import PlayVid from '../../components/PlayVid/PlayVid';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(25),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function Analytics(props) {
//   const classes = useStyles();

//   const style=useStyles();
//   const [classAnalytics, setVideoAnalyticsData] = React.useState({});
//   const [notebookData, setNotebookData] = React.useState({});

//   console.log("Progs:");
//   console.log(props.match.params.classID);

//   React.useEffect(() => {
//       fetch(`http://localhost:9000/resources/analytics/class-analytics?classID=${props.match.params.classID}`)
//         .then(results => results.json())
//         .then(data => {
//           console.log("in client:");
//           console.log(data);
//           setVideoAnalyticsData(data.video);
//           setNotebookData(data.notebook);
//         });
//     }, []);

//   return (
//     <div style={{padding: '2% 2%'}, {margin: '5% 2% 2% 2%'}}>
//       <div className={classes.root}>
//           <Grid container spacing={3}>
//               <Grid item xs={4}>
//                   <Notebook notebookData={notebookData}/>
//               </Grid>
//               <Grid item xs={8}>
//                   <Paper className={classes.paper}>
//                       <PlayVid/>
//                   </Paper>
//               </Grid>
//               <Grid item xs={4}>
//                   <Paper Paper className={classes.paper}>
//                       ALMAS CODE HERE
//                       {/*<OverallStatsGraph/> */}
//                   </Paper>
//               </Grid>
//               <Grid item xs={8}>
//                   <Paper className={classes.paper}>GRAPH</Paper>
//               </Grid>
//           </Grid>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import BarChartIcon from '@material-ui/icons/BarChart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
import Notebook from '../../components/Notebook/Notebook';
import PlayVid from '../../components/PlayVid/PlayVid';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        JAAS Summerhacks
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const mainListItems = ["back"];
const secondaryListItems = ["to you"];

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    color:'lightskyblue',
    paddingRight: 20, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color:'lightskyblue'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));
var open = true;

export default function Analytics(props) {

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const [classAnalytics, setVideoAnalyticsData] = React.useState({});
  const [notebookData, setNotebookData] = React.useState({});

  console.log("Progs:");
  console.log(props.match.params.classID);

  React.useEffect(() => {
      fetch(`http://localhost:9000/resources/analytics/class-analytics?classID=${props.match.params.classID}`)
        .then(results => results.json())
        .then(data => {
          setVideoAnalyticsData(data.video);
          setNotebookData(data.notebook);
        });
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} style={{background: 'black'}}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
                Zoom-U Emo-lytics
            </Typography>
          {/* <IconButton color="inherit"> */}
          <Button href="/dashboard" className={classes.menuButton}> DASHBOARD </Button>
          <Button href="/"  className={classes.menuButton} >Settings</Button>
          <Button href="/" className={classes.menuButton} >SIGN OUT</Button>
          {/* </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), }} open={open} >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
            <List>
              <ListItem>
                <Button href="/dashboard">  
                    {/* <BarChartIcon />
                    <ListItemText primary="Graph 1" /> */}
                    <Link to="/dashboard" className={classes.menuButton}> DASHBOARD </Link>
                </Button>
              </ListItem>
              <ListItem>
                  <Button href="/">  
                        {/* <BarChartIcon /> */}
                        <Link to="" className={classes.menuButton} >SIGN OUT</Link>
                        {/* <ListItemText primary="Graph 2" /> */}
                  </Button>
              </ListItem>
            </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Notebook notebookData={notebookData}/>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <PlayVid/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper Paper className={classes.paper}>
                        ALMAS CODE HERE
                        {/*<OverallStatsGraph/> */}
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>GRAPH</Paper>
                </Grid>
            </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}


