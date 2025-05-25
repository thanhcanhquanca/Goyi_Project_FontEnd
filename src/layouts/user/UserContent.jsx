import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import React from "react";
import { Outlet } from 'react-router';

function UserContent({ sidebarOpen }) {
    return (
        <>
            {/* Main Content */}
            <Box
                sx={{
                    width: sidebarOpen ? '87%' : '100%',
                    backgroundColor: '#e0e0e0',
                    height: '100%',
                    overflowY: 'auto',
                    transition: 'width 0.3s ease-in-out',
                }}
            >
                <Paper sx={{ minHeight: '200vh', p: 2 }}>
                    <Outlet />
                </Paper>
            </Box>
        </>
    );
}

export default UserContent;