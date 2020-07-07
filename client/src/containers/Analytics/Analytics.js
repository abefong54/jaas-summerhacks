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
    const [classAnalytics, setVideoAnalyticsData] = React.useState({});
    const [notebookData, setNotebookData] = React.useState({});

    console.log("Progs:");
    console.log(props.match.params.classID);

    React.useEffect(() => {
        fetch(`http://localhost:9000/resources/analytics/class-analytics?classID=${props.match.params.classID}`)
          .then(results => results.json())
          .then(data => {
            console.log("in client:");
            console.log(data);
            
            //console.log(data.video.angry_sum["S"])
            setVideoAnalyticsData(data.video);
            setNotebookData(data.notebook);
          });
      }, []);

    return(
        <div className={style.root}>
            <div className={style.vid}>
                <PlayVid/>
            </div>
            <div className={style.realtime}>
                <RealTimeStats/>
            </div>
            <div className={style.overall}>
                <OverallStatsGraph classAnalytics={classAnalytics}/>
            </div>
        </div>
    )
}