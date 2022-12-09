import React from 'react';
import {Link} from "react-router-dom";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const PlaylistCard = ({playlist: {id: {playlistId}, snippet}}) => {
  return (
      <Card sx={{width: {xs: '100%', sm: '358px'}, backgroundColor: '#1e1e1e'}}>
          <Link to={playlistId ? `video/${playlistId}` : '/'} >
              <CardMedia
                  image={snippet?.thumbnails?.high?.url}
                  alt={snippet.title}
                  sx={{width: {xs: '100%', sm: '358px'}, height: 180}}
              />
          </Link>
          <CardContent sx={{backgroundColor: '#1e1e1e', height: '60px', borderRadius: ' 0 0 10px 10px', border: 'none', outline: 'none'}}>
              <Link to={`playlist/${playlistId}`} >
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

export default PlaylistCard