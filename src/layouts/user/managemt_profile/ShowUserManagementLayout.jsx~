import { Box } from '@mui/material';
import ManagementSidebar from './ManagementSidebar.jsx';
import ManagementContent from './ManagementContent.jsx';
import ManagementHeader from './ManagementHeader.jsx';
import React, { useState } from 'react';

function ShowUserManagementLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                overflow: 'hidden', // Tắt cuộn hoàn toàn
                display: 'flex',
                flexDirection: 'column',
                height: '100vh', // Đảm bảo chiều cao bằng viewport
                width: '100vw', // Đảm bảo chiều rộng bằng viewport
            }}
        >
            {/* Header */}
            <Box position="static" sx={{ overflow: 'hidden' }}>
                <ManagementHeader sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            </Box>
            {/* Sidebar và Content */}
            <Box
                sx={{
                    flexGrow: 1,
                    mt: '60px',
                    height: 'calc(100vh - 60px)',
                    display: 'flex',
                    width: '100vw',
                }}
            >
                <ManagementSidebar sidebarOpen={sidebarOpen} />
                <ManagementContent sidebarOpen={sidebarOpen} />
            </Box>
        </Box>
    );
}

export default ShowUserManagementLayout;