import React, {useState} from 'react';
import {Paper, IconButton} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('submitted')

        if (searchTerm){
            navigate(`/search/${searchTerm}`);

            setSearchTerm('')
        }
    }
    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3e',
                pl: 2,
                boxShadow: 'none',
                mr: {sm: 5},
            }}
        >
            <input
                className='search-bar'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
            />
            <IconButton type='submit' sx={{p: '10px', height: '30px'}}>
                <SearchOutlined fontSize='small'/>
            </IconButton>
        </Paper>
    )
}

export default SearchBar;