import React from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Tooltip
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

const NAVIGATION = [
    { segment: 'dashboard', title: 'Tổng quan', icon: <DashboardIcon /> },
    { segment: 'orders', title: 'Nội dung', icon: <ShoppingCartIcon /> },
    { kind: 'divider' },
    { segment: 'reports', title: 'Phân tích', icon: <BarChartIcon /> },
    {segment: 'integrations', title: 'Phụ đề', icon: <LayersIcon />},
    {segment: 'money', title: 'Kiếm tiền', icon: <LayersIcon />,}
];

function ManagementSidebar({ sidebarOpen }) {
    return (
        <Box
            sx={{
                width: sidebarOpen ? 250 : 60,
                minWidth: sidebarOpen ? 250 : 60,
                height: 'calc(100vh - 60px)',
                position: 'fixed',
                top: 60,
                left: 0,
                backgroundColor: '#fff',
                boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
                overflowX: 'hidden',
                transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), min-width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                willChange: 'width, min-width', // Tối ưu hiệu suất render
            }}
        >
            <List sx={{ width: '100%' }}>
                {NAVIGATION.map((item, index) => {
                    if (item.kind === 'divider') {
                        return <Divider key={index} sx={{ my: 1 }} />;
                    }

                    const renderListItem = (entry, isChild = false) => (
                        <Tooltip
                            key={entry.segment}
                            title={sidebarOpen ? '' : entry.title}
                            placement="right"
                            arrow
                        >
                            <ListItem
                                button
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    py: 1,
                                    pl: isChild ? 4 : 0, // Thụt đầu dòng cho các mục con
                                    justifyContent: sidebarOpen ? 'flex-start' : 'center',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 'unset',
                                        pl: '15px',
                                        mr: sidebarOpen ? 1.5 : 0,
                                        justifyContent: 'center',
                                        transition: 'margin-right 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                >
                                    {entry.icon}
                                </ListItemIcon>

                                <ListItemText
                                    primary={entry.title}
                                    primaryTypographyProps={{
                                        fontSize: 14,
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                    }}
                                    sx={{
                                        opacity: sidebarOpen ? 1 : 0,
                                        transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        transform: sidebarOpen ? 'translateX(0)' : 'translateX(-20px)', // Thêm hiệu ứng trượt
                                    }}
                                />
                            </ListItem>
                        </Tooltip>
                    );

                    return (
                        <React.Fragment key={index}>
                            {renderListItem(item)}
                            {item.children &&
                                item.children.map((child) => renderListItem(child, true))}
                        </React.Fragment>
                    );
                })}
            </List>
        </Box>
    );
}

export default ManagementSidebar;