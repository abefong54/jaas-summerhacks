
import React from 'react';
import ReactPlayer from 'react-player'

export default function PlayVid(props) {
    console.log('from playvid: ' + props.vid_name);
    const vid = '07-02-2020-biology';
    const vid_url = 'https://s3-bucket-v2.s3.us-east-2.amazonaws.com/' + props.vid_name
    return (
        <ReactPlayer url={vid_url} controls='true' />
    )
}