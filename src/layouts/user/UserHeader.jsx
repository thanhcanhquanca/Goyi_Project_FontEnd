import React from 'react';
import {
    Paper, Icon, IconButton, InputBase, Typography, Badge
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Box from "@mui/material/Box";

function UserHeader({ isSmallScreen, isMediumScreen, handleOpenSearch }) {
    return (
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
                px: 2,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                zIndex: 1000,
            }}
        >
            {/* Menu + Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
                <Icon sx={{ mr: 2 }}>
                    <MenuIcon />
                </Icon>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ fontWeight: 600 }}
                >
                    GOYI
                </Typography>
            </Box>

            {/* Thanh tìm kiếm hoặc icon tìm kiếm khi màn hình nhỏ */}
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

            {/* Các biểu tượng bên phải */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* Tạo */}
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
                >
                    <AddIcon sx={{ color: 'black' }} />
                    {!isSmallScreen && (
                        <Typography sx={{ ml: 1, fontSize: 13, color: 'black' }}>Tạo</Typography>
                    )}
                </IconButton>

                {/* Mail */}
                <IconButton size="large" aria-label="show mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>

                {/* thông báo */}
                <IconButton size="large" aria-label="show notifications" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                {/* ảnh đại diện cá nhân */}
                <IconButton size="large" edge="end" aria-label="account" color="inherit">
                    <AccountCircle sx={{ height: 30, width: 30 }} />
                </IconButton>
            </Box>
        </Box>
    );
}

export default UserHeader;