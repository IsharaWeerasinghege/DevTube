import React from 'react';
import {Box, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const ChannelCard = ({channelDetails, margintop}) => {
    return (
        <Box

            className="channelCard"
            sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            Width: {xs: '100%', md: '358px'},
            height: '280px',
                marginTop: margintop,
        }}>
            <Link to={`channel/${channelDetails?.id?.channelId}`}>
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: '#fff',
                    Width: {xs: '100%', md: '358px'},
                }}>
                    <CardMedia image={channelDetails?.snippet?.thumbnails?.high.url}
                               sx={{borderRadius: '50%', height: '180px', width: '180px'}}/>
                    <Typography variant='h6'>
                        {channelDetails?.snippet?.title}
                    </Typography>
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard