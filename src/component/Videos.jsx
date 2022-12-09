import React from 'react';
import {Box, Stack} from "@mui/material";
import {ChannelCard, PlaylistCard, VideoCard} from "./index";

const Videos = ({videos, direction}) => {
  return (
    <Stack direction={direction} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}
            {item.id.playlistId && <PlaylistCard playlist={item}/>}
          </Box>
      ))}
    </Stack>
  )
}

export default Videos