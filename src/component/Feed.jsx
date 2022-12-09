import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {SideBar, Videos} from "./index";
import {fetchFromAPI} from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('HTML');
  const [videos, setVideos] = useState([]);

  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
  },[selectedCategory])

  return (
    <Stack
      sx={{flexDirection: {sx: "column", md: "row"}}}
    >
      <Box sx={{height:{sx: 'auto', md: '87.5vh'}, borderRight: '1px solid #3d3d3d', px:{sx:0, md:2}}}>
        <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
        />

        <Typography className='copyright' variant="body2" sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2022 @ Ishara
        </Typography>
      </Box>

      <Box p={2} sx={{overflow: 'auto', height: '87.5vh', flex: 2}}>
        <Typography variant="h5" fontWeight='bold' mb={2} sx={{color: 'white'}}>
          {selectedCategory} Videos
        </Typography>

        <Videos direction='row' videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed