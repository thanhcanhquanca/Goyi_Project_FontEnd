import React, { useEffect, useState } from 'react';
import {
    Paper, IconButton, InputBase, Typography, Badge, MenuItem, Menu, ListItemIcon, Dialog, Tabs, Tab, Box, TextField, Button, Grid, InputAdornment, Link
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router";
import LoginRegisterDialog from './LoginRegisterDialog.jsx';
import QuizIcon from '@mui/icons-material/Quiz';

function UserHeader({ isSmallScreen, isMediumScreen, handleOpenSearch, toggleSidebar, sidebarOpen }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [tabValue, setTabValue] = useState(0);
    const [profilePicture, setProfilePicture] = useState(null); // State để lưu ảnh hồ sơ
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State để theo dõi trạng thái đăng nhập

    // Kiểm tra trạng thái đăng nhập và lấy profilePicture từ localStorage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const token = localStorage.getItem('authToken'); // Giả sử token được lưu với key 'authToken'
        setIsLoggedIn(!!(user && token)); // Đặt isLoggedIn thành true nếu có user và token
        if (user && user.profilePicture) {
            const baseUrl = 'http://localhost:8080/images/';
            setProfilePicture(baseUrl + user.profilePicture);
        }
    }, []); // Chạy một lần khi component mount

    // Xử lý đăng xuất
    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        setProfilePicture(null); // Xóa ảnh hồ sơ khi đăng xuất
        setAnchorEl(null); // Đóng menu
        navigate('/'); // Chuyển hướng về trang chủ hoặc trang đăng nhập
    };

    const handleCreateClick = () => {
        navigate('/home/user-profile');
    };

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
        handleMenuClose();
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 60,
                    backgroundColor: '#d6bfff',
                    borderRadius: 1,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    paddingRight: 2,
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
                            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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

                {!isSmallScreen ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center', mx: 2 }}>
                        <Paper
                            component="form"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                maxWidth: isMediumScreen ? 400 : 600,
                                height: 40,
                                userSelect: 'none',
                                borderRadius: '50px',
                                boxShadow: '0 0 4px rgba(0,0,0,0.1)',
                            }}
                        >
                            <InputBase
                                sx={{ ml: 3, flex: 1, fontSize: 15 }}
                                placeholder="Tìm kiếm"
                                inputProps={{ 'aria-label': 'tìm kiếm' }}
                            />
                            <IconButton sx={{ p: '10px', height: 40 }} aria-label="keyboard">
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
                        <IconButton sx={{ ml: 1, backgroundColor: '#eee', height: 40 }} aria-label="microphone">
                            <MicIcon />
                        </IconButton>
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                        <IconButton onClick={handleOpenSearch} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Box>
                )}

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton
                        sx={{
                            borderRadius: 5,
                            backgroundColor: 'rgba(255,255,255,0.29)',
                            px: 1.5,
                            height: 36,
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.5)',
                            }
                        }}
                        onClick={handleCreateClick}
                    >
                        <AddIcon sx={{ color: 'black' }} />
                        {!isSmallScreen && (
                            <Typography sx={{ ml: 1, fontSize: 13, color: 'black' }}>Tạo</Typography>
                        )}
                    </IconButton>

                    <IconButton size="large" aria-label="show mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>

                    <IconButton size="large" aria-label="show notifications" color="inherit">
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account"
                        color="inherit"
                        onClick={handleAvatarClick}
                    >
                        {profilePicture ? (
                            <img
                                src={profilePicture}
                                alt="Profile"
                                style={{
                                    height: 40,
                                    width: 40,
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    border: '2px solid #DDDDDD'
                                }}
                            />
                        ) : (
                            <AccountCircle sx={{ height: 40, width: 40 }} />
                        )}
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
                            <SettingsIcon fontSize="small" />
                        </ListItemIcon>
                        Cài Đặt
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <QuizIcon fontSize="small" />
                        </ListItemIcon>
                        Giới thiệu
                    </MenuItem>
                    {!isLoggedIn && (
                        <MenuItem onClick={handleOpenDialog}>
                            <ListItemIcon>
                                <LoginIcon fontSize="small" />
                            </ListItemIcon>
                            Tài Khoản
                        </MenuItem>
                    )}
                    {isLoggedIn && (
                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon fontSize="small" />
                            </ListItemIcon>
                            Đăng xuất
                        </MenuItem>
                    )}
                </Menu>

                <LoginRegisterDialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    tabValue={tabValue}
                    handleTabChange={handleTabChange}
                />
            </Box>
        </>
    );
}

export default UserHeader;