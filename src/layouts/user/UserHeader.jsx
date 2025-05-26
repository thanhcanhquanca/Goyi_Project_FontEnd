import React, { useState } from 'react';
import {
    Paper, Icon, IconButton, InputBase, Typography, Badge, MenuItem, Menu, ListItemIcon, Dialog, Tabs, Tab, Box, TextField, Button, Grid, InputAdornment, Link
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
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
import LoginRegisterDialog from './LoginRegisterDialog';

// Component này dùng để hiển thị thanh header chính của ứng dụng GOYI
function UserHeader({ isSmallScreen, isMediumScreen, handleOpenSearch, toggleSidebar }) {
    const navigate = useNavigate(); // Hook để điều hướng giữa các trang
    const [anchorEl, setAnchorEl] = useState(null); // State để quản lý vị trí menu avatar
    const [openDialog, setOpenDialog] = useState(false); // State để quản lý trạng thái mở dialog đăng nhập/đăng ký
    const [tabValue, setTabValue] = useState(0); // State để quản lý tab (0: Đăng nhập, 1: Đăng ký)

    // Hàm xử lý khi nhấp vào nút "Tạo" để chuyển hướng đến trang hồ sơ người dùng
    const handleCreateClick = () => {
        navigate('/home/user-profile');
    };

    // Hàm mở menu avatar khi nhấp vào biểu tượng tài khoản
    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Hàm đóng menu avatar
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Hàm mở dialog đăng nhập/đăng ký
    const handleOpenDialog = () => {
        setOpenDialog(true);
        handleMenuClose();
    };

    // Hàm đóng dialog đăng nhập/đăng ký
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    // Hàm xử lý thay đổi tab (Đăng nhập hoặc Đăng ký)
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            {/* Thanh header chính của ứng dụng */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 60,
                    backgroundColor: '#d6bfff', // Màu nền header
                    borderRadius: 1,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    px: 2,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Đổ bóng
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    zIndex: 1000, // Đảm bảo header nằm trên các phần khác
                }}
            >
                {/* Phần bên trái của header: Logo và nút menu */}
                <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
                    {/* Nút mở/đóng sidebar */}
                    <Icon sx={{ mr: 2 }}>
                        <IconButton onClick={toggleSidebar}>
                            <MenuIcon />
                        </IconButton>
                    </Icon>
                    {/* Logo của ứng dụng */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ fontWeight: 600 }}
                    >
                        GOYI
                    </Typography>
                </Box>

                {/* Phần giữa của header: Thanh tìm kiếm */}
                {!isSmallScreen ? (
                    // Hiển thị thanh tìm kiếm đầy đủ trên màn hình lớn
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center', mx: 2 }}>
                        <Paper
                            component="form"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                maxWidth: isMediumScreen ? 400 : 600, // Điều chỉnh chiều rộng dựa trên kích thước màn hình
                                height: 40,
                                borderRadius: '50px',
                                boxShadow: '0 0 4px rgba(0,0,0,0.1)',
                            }}
                        >
                            {/* Trường nhập tìm kiếm */}
                            <InputBase
                                sx={{ ml: 3, flex: 1, fontSize: 15 }}
                                placeholder="Tìm kiếm"
                                inputProps={{ 'aria-label': 'tìm kiếm' }}
                            />
                            {/* Nút hiển thị bàn phím ảo */}
                            <IconButton sx={{ p: '10px', height: 40 }} aria-label="keyboard">
                                <KeyboardIcon />
                            </IconButton>
                            {/* Nút tìm kiếm */}
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
                        {/* Nút micro để tìm kiếm bằng giọng nói */}
                        <IconButton sx={{ ml: 1, backgroundColor: '#eee', height: 40 }} aria-label="microphone">
                            <MicIcon />
                        </IconButton>
                    </Box>
                ) : (
                    // Hiển thị chỉ biểu tượng tìm kiếm trên màn hình nhỏ
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                        <IconButton onClick={handleOpenSearch} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Box>
                )}

                {/* Phần bên phải của header: Các nút hành động */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {/* Nút "Tạo" để chuyển hướng đến trang hồ sơ */}
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

                    {/* Nút thông báo email với badge */}
                    <IconButton size="large" aria-label="show mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>

                    {/* Nút thông báo với badge */}
                    <IconButton size="large" aria-label="show notifications" color="inherit">
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    {/* Nút avatar để mở menu tài khoản */}
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account"
                        color="inherit"
                        onClick={handleAvatarClick}
                    >
                        <AccountCircle sx={{ height: 30, width: 30 }} />
                    </IconButton>
                </Box>

                {/* Menu tài khoản hiển thị khi nhấp vào avatar */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    {/* Mở dialog đăng nhập/đăng ký */}
                    <MenuItem onClick={handleOpenDialog}>
                        <ListItemIcon>
                            <LoginIcon fontSize="small" />
                        </ListItemIcon>
                        Tài Khoản
                    </MenuItem>
                    {/* Chuyển đến trang cài đặt */}
                    <MenuItem>
                        <ListItemIcon>
                            <SettingsIcon fontSize="small" />
                        </ListItemIcon>
                        Cài Đặt
                    </MenuItem>
                    {/* Đăng xuất khỏi hệ thống */}
                    <MenuItem>
                        <ListItemIcon>
                            <LogoutIcon fontSize="small" />
                        </ListItemIcon>
                        Đăng Xuất
                    </MenuItem>
                </Menu>

                {/* Component dialog đăng nhập/đăng ký */}
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