import React from 'react';
import {Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {SearchBar} from "./index";

const Navbar = () => {
  return (
    <Stack
        direction={{xs: 'column', md: 'row'}}
        alignItems="center"
        p={1}
        sx={{position: 'sticky', top: 0, justifyContent: 'space-between', backgroundColor: '#0f0f0f', zIndex: '100'}}
    >
      <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
        <Typography variant='h5' color='#fff' fontWeight='bold' pl={4}>
          DevTube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar