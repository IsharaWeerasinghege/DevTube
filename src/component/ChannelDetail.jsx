import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {Box} from "@mui/material";
import {ChannelCard, Videos} from "./index";

const ChannelDetail = () => {
    const [channelDetails, setChannelDetails] = useState(null)
    const [videos, setVideos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetails(data?.items[0]));
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
    }, [id])

    return (<Box minHeight='95vh'>
            <Box>
                <div
                    style={{
                        width: '100%',
                        height: '200px',
                        backgroundImage: `url(${channelDetails?.brandingSettings?.image?.bannerExternalUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                        }}
                />
                <ChannelCard channelDetails={channelDetails} margintop='-150px'/>
            </Box>

            <Box display="flex" p={2}>
                <Box sx={{m: {sm: '10px 90px'}}} >
                    <Videos direction='row' videos={videos} />
                </Box>
            </Box>
        </Box>

    )
}

export default ChannelDetail