import React from 'react';
import Box from '@mui/material/Box';
import {
    Paper, IconButton, InputBase
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SearchPopup({ openSearch, isSmallScreen, handleCloseSearch }) {
    if (!openSearch || !isSmallScreen) return null;

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 60,
                backgroundColor: 'white',
                zIndex: 1201,
                display: 'flex',
                alignItems: 'center',
                px: 1,
                boxShadow: '0px 2px 10px rgba(0,0,0,0.2)'
            }}
        >
            <IconButton onClick={handleCloseSearch}>
                <ArrowBackIcon />
            </IconButton>
            <Paper
                component="form"
                sx={{
                    ml: 1,
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    height: 40,
                    borderRadius: '50px',
                    boxShadow: '0 0 4px rgba(0,0,0,0.1)',
                }}
            >
                <InputBase
                    sx={{ ml: 2, flex: 1, fontSize: 15 }}
                    placeholder="Tìm kiếm"
                    inputProps={{ 'aria-label': 'tìm kiếm' }}
                />
                <IconButton sx={{ p: '10px' }} aria-label="keyboard">
                    <KeyboardIcon />
                </IconButton>
                <IconButton
                    type="submit"
                    sx={{
                        p: '10px',
                        height: 40,
                        width: 70,
                        borderRadius: 1,
                        backgroundColor: "rgba(207,207,207,0.29)",
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 20,
                        '&:hover': {
                            backgroundColor: "rgba(189,189,189,0.49)",
                        }
                    }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
            <IconButton sx={{ ml: 1 }} aria-label="microphone">
                <MicIcon />
            </IconButton>
        </Box>
    );
}

export default SearchPopup;