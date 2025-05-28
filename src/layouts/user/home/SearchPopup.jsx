import React from 'react';
import Box from '@mui/material/Box';
import {
    Paper, IconButton, InputBase
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Định nghĩa component SearchPopup để hiển thị thanh tìm kiếm dạng popup trên màn hình nhỏ
function SearchPopup({ openSearch, isSmallScreen, handleCloseSearch }) {
    // Kiểm tra nếu không phải màn hình nhỏ hoặc popup không mở thì không hiển thị
    if (!openSearch || !isSmallScreen) return null;

    return (
        <Box
            sx={{
                position: 'absolute', // Đặt vị trí tuyệt đối để phủ lên giao diện
                top: 0,
                left: 0,
                right: 0,
                height: 60, // Chiều cao cố định cho popup
                backgroundColor: 'white',
                zIndex: 1201, // Đảm bảo popup nằm trên các thành phần khác
                display: 'flex',
                alignItems: 'center',
                userSelect: 'none',
                px: 1, // Padding ngang
                boxShadow: '0px 2px 10px rgba(0,0,0,0.2)' // Đổ bóng cho popup
            }}
        >
            {/*// Nút quay lại để đóng popup*/}
            <IconButton onClick={handleCloseSearch}>
                <ArrowBackIcon />
            </IconButton>
            {/*// Thanh tìm kiếm dạng Paper*/}
            <Paper
                component="form"
                sx={{
                    ml: 1, // Margin trái
                    flexGrow: 1, // Chiếm toàn bộ không gian còn lại
                    display: 'flex',
                    alignItems: 'center',
                    height: 40,
                    borderRadius: '50px', // Bo góc tròn
                    boxShadow: '0 0 4px rgba(0,0,0,0.1)', // Đổ bóng nhẹ
                }}
            >
                {/*// Trường nhập liệu tìm kiếm*/}
                <InputBase
                    sx={{ ml: 2, flex: 1, fontSize: 15 }}
                    placeholder="Tìm kiếm"
                    inputProps={{ 'aria-label': 'tìm kiếm' }}
                />
                {/*// Nút hiển thị bàn phím ảo*/}
                <IconButton sx={{ p: '10px' }} aria-label="keyboard">
                    <KeyboardIcon />
                </IconButton>
                {/*// Nút tìm kiếm*/}
                <IconButton
                    type="submit"
                    sx={{
                        p: '10px',
                        height: 40,
                        width: 70,
                        borderRadius: 1,
                        backgroundColor: "rgba(207,207,207,0.29)", // Màu nền nút
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 20,
                        '&:hover': {
                            backgroundColor: "rgba(189,189,189,0.49)", // Hiệu ứng hover
                        }
                    }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
            {/*// Nút micro cho tìm kiếm bằng giọng nói*/}
            <IconButton sx={{ ml: 1 }} aria-label="microphone">
                <MicIcon />
            </IconButton>
        </Box>
    );
}

// Xuất component để sử dụng trong các file khác
export default SearchPopup;