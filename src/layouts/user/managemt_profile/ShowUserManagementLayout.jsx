import { Box } from '@mui/material';
import ManagementSidebar from './ManagementSidebar.jsx';
import ManagementContent from './ManagementContent.jsx';
import ManagementHeader from './ManagementHeader.jsx';
import React, { useState } from 'react';

function ShowUserManagementLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Tính toán chiều rộng sidebar dựa trên trạng thái sidebarOpen
    const sidebarWidth = sidebarOpen ? 250 : 60;

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100vw',
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
                <ManagementSidebar sidebarWidth={sidebarWidth} /> {/* Truyền sidebarWidth */}
                <ManagementContent sidebarWidth={sidebarWidth} /> {/* Truyền sidebarWidth */}
            </Box>
        </Box>
    );
}

export default ShowUserManagementLayout;