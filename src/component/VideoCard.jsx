import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{width: {xs: '100%', sm: '358px'}, minWidth: '290px', backgroundColor: '#1e1e1e'}}>
      <Link to={videoId ? `/video/${videoId}` : '/'} >
        <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet.title}
            sx={{width: {xs: '100%', sm: '358px'}, height: 180, objectFit: 'cover'}}
        />
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '60px', borderRadius: ' 0 0 10px 10px', border: 'none', outline: 'none', width: {xs: '95%', md: '358px'}}}>
          <Link to={`video/${videoId}`} >
              <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                  {snippet?.title.slice(0, 60)}
              </Typography>
          </Link>
          <Link to={`channel/${snippet.channelId}`} >
              <Typography variant='subtitle2' fontWeight='bold' color='#fff'>
                  {snippet?.channelTitle}
              </Typography>
          </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard