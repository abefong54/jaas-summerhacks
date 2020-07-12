import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import './Footer.css';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="">
          JAAS
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    }
  }));

  export default function Dashboard() {
    const classes = useStyles();
        return(
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Zoom-U Emo-lytics
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Created for Summerhacks 2020!
                </Typography>
                <Copyright />
            </footer>
        );
    }

