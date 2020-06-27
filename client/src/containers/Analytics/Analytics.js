import React from 'react';
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
        border:"1px solid lightskyblue",
        padding:"150px"

    },
    realtime:{
        marginTop:'10px',
        border:"1px solid lightskyblue",
        padding:"100px",
        marginBottom:'10px'

    },
    backbutton:{
        background: 'black',
      border: 0,
      borderRadius: 5,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color:'#87cefa' ,
      height: 48,
      padding: '0 30px',
      weight: 'bold',

    }
    
    
      
    
    

  });

export default function Analytics(){
    const style=useStyles();
    return(
        <div>
        <div className={style.backbutton}>
           <Link to="/"></Link><Button>Back</Button>

        </div>

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