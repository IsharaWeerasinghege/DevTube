import React from 'react';
import {Button, Stack} from "@mui/material";
import {categories} from "../utils/constant";

const SideBar = ({selectedCategory, setSelectedCategory}) => {

  return (
    <Stack
        direction='row'
        sx={{
          overflowY: "auto",
          height: {
            sx: 'auto',
            md: '98%',
          },
          flexDirection: {md: 'column'}
        }}
    >
        {categories.map((category) => (
            <Button
                key={category.name}
                className='category-btn'
                style={{
                    background: category.name === selectedCategory && '#282828',
                    color: '#fff',
                    marginBottom: '5px',
                    opacity: category.name === selectedCategory ? "1" : '0.8'
                }}
                onClick={()=> {setSelectedCategory(category.name)}}
            >
                <span className='category-ico' style={{marginRight: '15px'}}>{category.icon}</span>
                <span className='category-name'>{category.name}</span>
            </Button>
        ))}
    </Stack>
  )
}

export default SideBar