import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {
    Paper, IconButton, InputBase, useMediaQuery, Grid
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UserHeader from './UserHeader';
import SearchPopup from "./SearchPopup.jsx";
import SideBar from "./SideBar.jsx";
import UserContent from "./UserContent.jsx";

function ShowUserLayout() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [openSearch, setOpenSearch] = useState(false);

    const handleOpenSearch = () => {
        setOpenSearch(true);
    };

    const handleCloseSearch = () => {
        setOpenSearch(false);
    };

    return (
        <Box sx={{ flexGrow: 1 ,overflow:'hidden' }}>
            <Box position="static" sx={{  overflow:'hidden'}}>
                <UserHeader
                    isSmallScreen={isSmallScreen}
                    isMediumScreen={isMediumScreen}
                    handleOpenSearch={handleOpenSearch}
                />

                <SearchPopup
                    openSearch={openSearch}
                    isSmallScreen={isSmallScreen}
                    handleCloseSearch={handleCloseSearch}
                />

            </Box>
            <Box sx={{ p: 0, flexGrow: 1, mt: "60px", height: 'calc(100vh - 60px)', display: 'flex' }}>
                <SideBar/>

                {/* Main Content */}
                <UserContent/>
            </Box>


        </Box>
    );
}

export default ShowUserLayout;