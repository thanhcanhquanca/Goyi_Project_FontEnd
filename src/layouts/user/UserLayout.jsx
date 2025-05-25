import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import UserHeader from './UserHeader';
import SearchPopup from './SearchPopup';
import SideBar from './SideBar';
import UserContent from './UserContent';
import {useMediaQuery, useTheme} from "@mui/material";

function ShowUserLayout() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [openSearch, setOpenSearch] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleOpenSearch = () => {
        setOpenSearch(true);
    };

    const handleCloseSearch = () => {
        setOpenSearch(false);
    };

    const toggleSidebar = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setSidebarOpen((prev) => !prev);
        }
    };

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 300); // Match this with the transition duration (0.3s)
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <Box position="static" sx={{ overflow: 'hidden' }}>
                <UserHeader
                    isSmallScreen={isSmallScreen}
                    isMediumScreen={isMediumScreen}
                    handleOpenSearch={handleOpenSearch}
                    toggleSidebar={toggleSidebar}
                />
                <SearchPopup
                    openSearch={openSearch}
                    isSmallScreen={isSmallScreen}
                    handleCloseSearch={handleCloseSearch}
                />
            </Box>
            <Box
                sx={{
                    flexGrow: 1,
                    mt: '60px',
                    height: 'calc(100vh - 60px)',
                    display: 'flex',
                    width: '100vw',
                }}
            >
                <SideBar sidebarOpen={sidebarOpen} />
                <UserContent sidebarOpen={sidebarOpen} />
            </Box>
        </Box>
    );
}

export default ShowUserLayout;