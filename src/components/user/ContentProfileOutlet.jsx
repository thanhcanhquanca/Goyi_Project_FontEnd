import {Paper, Typography} from "@mui/material";
import Box from "@mui/material/Box";

function ContentProfileOutlet() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                height: '100vh', // Chiều cao full màn hình
                backgroundColor: '#e0e0e0', // Màu nền xám nhạt
                overflowY: 'auto', // Cho phép cuộn dọc
                p: 2, // Padding
            }}
        >

            <Paper sx={{ minHeight: '100%', p: 2 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Hồ Sơ Người Dùng
                </Typography>
                <Typography variant="body1">
                    Đây là trang hồ sơ người dùng, hiển thị thông tin cá nhân, lịch sử hoạt động, hoặc các cài đặt liên quan.
                </Typography>
            </Paper>
        </Box>
    );
}
export default ContentProfileOutlet