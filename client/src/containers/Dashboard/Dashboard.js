import React, { Component } from 'react';
import './Dashboard.css';
import ClassDropdown from '../../components/ClassDropdown/ClassDropdown';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      
      
    },
    welcomBanner:{
        paddingLeft:'20' ,
            

    },
    dropdown:{

    }


  });


export default function Dashboard(){
    const classes= useStyles();

    return(
<div style={{paddingTop:'100px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className={classes.welcomeBanner}>
                            WELCOME BANNER
                        </div> 
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.dropdown}>
                            <ClassDropdown/>
                        </div> 
                    </Grid>
                    <Grid item xs={12}>
                        <div className="">
                            <h1>The Dashboard Body
                            <br></br>
                            Line 13:42:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 23:25:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

./src/components/ClassDropdown/ClassDropdown.js
  Line 1:17:   'useState' is defined but never used               no-unused-vars
  Line 28:21:  'setClassList' is assigned a value but never used  no-unused-vars

./src/containers/Header/Header.js
  Line 2:22:  'withTheme' is defined but never used  no-unused-vars

./src/App.js
  Line 3:8:  'logo' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-n














                            </h1>
                        </div>
                    </Grid>
                </Grid>
            </div>

    )
}


/* class Dashboard extends Component{
    render() {
        // SHOULD BE A HUGE DIV WITH A BANNER FOR USER GREETING, 
        // A DROPDOWN FOR CLASS SELECTION
        // A BUTTON FOR VIDEO UPLOADING FORM
        // AND A TABLE WITH VIDEOS BELONGING TO A CLASS
        return (  
            <div style={{paddingTop:'100px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <div className="">
                            WELCOME BANNER
                        </div> 
                    </Grid>
                    <Grid item xs={6}>
                        <div className="">
                            <ClassDropdown/>
                        </div> 
                    </Grid>
                    <Grid item xs={12}>
                        <div className="">
                            <h1>The Dashboard Body
                            <br></br>
                            Line 13:42:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  Line 23:25:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid

./src/components/ClassDropdown/ClassDropdown.js
  Line 1:17:   'useState' is defined but never used               no-unused-vars
  Line 28:21:  'setClassList' is assigned a value but never used  no-unused-vars

./src/containers/Header/Header.js
  Line 2:22:  'withTheme' is defined but never used  no-unused-vars

./src/App.js
  Line 3:8:  'logo' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-n














                            </h1>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default Dashboard;
 */