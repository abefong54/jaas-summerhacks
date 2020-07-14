import React from 'react';
import OverallStatsGraph from '../../components/OverallStatsGraph/OverallStatsGraph';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import RealTimeStats from '../../components/RealTimeStats/RealTimeStats';
import PlayVid from '../../components/PlayVid/PlayVid';


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
});

export default function Analytics(props){
    const style=useStyles();
    const {vidName} = props.location.state;
    return(
        <div className={style.root}>
            <div className={style.vid}>
                <PlayVid vid_name={vidName}/>
            </div>
            <div className={style.realtime}>
                <RealTimeStats/>
            </div>
            <div className={style.overall}>
                <OverallStatsGraph/>
            </div>
        </div>
    )
}