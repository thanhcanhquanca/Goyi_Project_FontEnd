import { Badge, IconButton, InputBase, ListItemIcon, Menu, MenuItem, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import AddIcon from '@mui/icons-material/Add';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import React, { useState } from 'react';
import FeedbackIcon from "@mui/icons-material/Feedback";
import HelpIcon from "@mui/icons-material/Help";

function ManagementHeader({ sidebarOpen, toggleSidebar }) {
    const [anchorEl, setAnchorEl] = useState(null);

    function handleAvatarProfileClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose() {
        setAnchorEl(null);
    }

    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 60,
                    backgroundColor: '#bfd5ff',
                    borderRadius: 1,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: '0 8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    zIndex: 1000,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0, ml: 0.5 }}>
                    <IconButton
                        sx={{
                            mr: 2,
                            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)', // Thêm hiệu ứng xoay
                            transform: sidebarOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                        }}
                        onClick={toggleSidebar}
                    >
                        {sidebarOpen ? <MenuOpenIcon /> : <MenuIcon />}
                    </IconButton>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{ fontWeight: 600, userSelect: 'none' }}
                    >
                        GOYI
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center', mx: 1, flexShrink: 1 }}>
                    <Paper
                        component='form'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: 500,
                            height: 40,
                            borderRadius: '50px',
                            userSelect: 'none',
                            boxShadow: '0 0 4px rgba(0,0,0,0.1)',
                            flexShrink: 1,
                        }}
                    >
                        <InputBase
                            sx={{ ml: 2, flex: 1, fontSize: 15 }}
                            placeholder='Tìm kiếm'
                            inputProps={{ 'aria-label': 'tìm kiếm' }}
                        />
                        <IconButton sx={{ p: '10px', height: 40 }} aria-label='keyboard'>
                            <KeyboardIcon />
                        </IconButton>
                        <IconButton
                            type='submit'
                            sx={{
                                p: '10px',
                                height: 40,
                                width: 70,
                                borderRadius: 1,
                                backgroundColor: 'rgba(207,207,207,0.29)',
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 20,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 20,
                                '&:hover': {
                                    backgroundColor: 'rgba(189,189,189,0.49)',
                                },
                            }}
                            aria-label='search'
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                    <IconButton sx={{ ml: 1, backgroundColor: '#eee', height: 40, flexShrink: 0 }} aria-label='microphone'>
                        <MicIcon />
                    </IconButton>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>

                    <IconButton
                        sx={{
                            borderRadius: 5,
                            backgroundColor: 'rgba(255,255,255,0.29)',
                            px: 1.5,
                            height: 36,
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.5)',
                            },
                        }}
                    >
                        <AddIcon sx={{ color: 'black' }} />
                        <Typography sx={{ ml: 1, fontSize: 13, color: 'black' }}>Tạo</Typography>
                    </IconButton>

                    <IconButton
                        size='large'
                        edge='end'
                        aria-label='account'
                        color='inherit'
                        onClick={handleAvatarProfileClick}
                    >
                        <AccountCircle sx={{ height: 30, width: 30 }} />
                    </IconButton>
                </Box>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <MenuItem>
                        <ListItemIcon>
                            <LoginIcon fontSize='small' />
                        </ListItemIcon>
                        Tài Khoản
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <SettingsIcon fontSize='small' />
                        </ListItemIcon>
                        Cài Đặt
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <LogoutIcon fontSize='small' />
                        </ListItemIcon>
                        Đăng Xuất
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    );
}

export default ManagementHeader;