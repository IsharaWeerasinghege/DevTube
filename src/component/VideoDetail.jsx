import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {Box, Stack, Typography} from "@mui/material";
import ReactPlayer from "react-player";
import {Videos} from "./index";

const VideoDetail = () => {
    const {id} = useParams();
    const [videoDetails, setVideoDetails] = useState(null);
    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=> setVideoDetails(data.items[0]));

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=> setVideo(data.items));
    }, [id]);


    return (
        <Box height='91.5vh'>
            <Stack direction={{xs: 'column', md: 'row'}}>
                <Box flex={1} >
                    <Box sx={{width: "100%", position: 'sticky', top: '65px'}}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}&modestbranding=1`} className='react-player' controls />
                        <Typography color="#fff" variant='h5' fontWeight='bold' p={2}>
                            {videoDetails?.snippet?.title}
                        </Typography>
                        <Stack direction='row' justifyContent='space-between' sx={{color: '#fff'}} px={2}>
                            <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                                <Typography color='#fff' variant={"subtitle1"}>
                                    {videoDetails?.snippet?.channelTitle}
                                </Typography>
                            </Link>
                            <Typography color='#fff' variant={"subtitle1"}>
                                {videoDetails?.statistics?.viewCount} views
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
                <Box px='2' py={{md: 1, xs: 5}} justifyContent='center' alignItems='center' >
                    <Videos videos={video} direction='column'/>
                </Box>
            </Stack>


        </Box>
    )
}

export default VideoDetail