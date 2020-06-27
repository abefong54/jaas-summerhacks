import React from 'react';
import { Route } from "react-router-dom";
import OverallStatsGraph from '../../components/OverallStatsGraph/OverallStatsGraph';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import RealTimeStats from '../../components/RealTimeStats/RealTimeStats';
import PlayVid from '../../components/PlayVid/PlayVid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        marginTop: '50px',
        padding:"30px"
    },
    vid:{
        marginTop:"30px",
        border:"1px solid lightskyblue",
        padding:"150px",
       
        

    },
    realtime:{
        marginTop:'10px',
        border:"1px solid lightskyblue",
        padding:"100px",
        marginBottom:'10px',
        

    },
    backbutton:{
      border: 0,
      borderRadius: 5,
      backgroundColor:"black",
      color:"white",
     
      height: 48,
      padding: '0 30px',
      weight: 'bold',
      marginTop:"70px",
      marginLeft:"30px"

    }
    
    
      
    
    

  });

export default function Analytics(){
    const style=useStyles();
    return(
        <div>
        
   <Link to="/dashboard" ><button className={style.backbutton}>Back</button></Link>

        

        <div className={style.root}>
            <div className={style.vid}>
                <PlayVid/>
            </div>
            <div className={style.realtime}>
                <RealTimeStats/>

            </div>
            <div className={style.overall}>
            <OverallStatsGraph/>

             </div>
             </div>
        
        
        
        </div>
        
    )

}