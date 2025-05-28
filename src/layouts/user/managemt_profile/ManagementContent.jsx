import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

function ManagementContent({ sidebarWidth }) {
    return (
        <Box
            sx={{
                flexGrow: 1,
                p: 3,
                overflow: 'hidden',
                transform: `translateX(${sidebarWidth}px)`, // Dịch chuyển theo sidebarWidth
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)', // Hiệu ứng mượt mà cho cả transform và width
                width: `calc(100% - ${sidebarWidth}px)`, // Điều chỉnh chiều rộng theo sidebarWidth
                willChange: 'transform, width', // Tối ưu hiệu suất
            }}
        >
            <Outlet />
        </Box>
    );
}

export default ManagementContent;