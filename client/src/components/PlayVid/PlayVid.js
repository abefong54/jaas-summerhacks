
import React from 'react';
import ReactPlayer from 'react-player'

class PlayVid extends React.Component {
    render(){
        return(
            <ReactPlayer url='https://s3-bucket-v2.s3.us-east-2.amazonaws.com/letss-see.mp4' controls='true'/>
        )
    }
}
export default PlayVid;