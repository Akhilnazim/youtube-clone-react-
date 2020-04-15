import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem'


const VideoList = ({videos, onVedioSelect}) => {
        const listOfVideos = videos.map((video, Id) => <VideoItem onVedioSelect={onVedioSelect} key={Id} video={video} />)
    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
    
}



export default VideoList;
