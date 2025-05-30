import React from "react";
import Box from "@mui/material/Box";
import { Button, Divider, Paper, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ReportIcon from "@mui/icons-material/Report";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SchoolIcon from "@mui/icons-material/School";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SportsIcon from "@mui/icons-material/Sports";
import FaceIcon from "@mui/icons-material/Face";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Diversity3Icon from "@mui/icons-material/Diversity3";

function SideBar() {
    const buttonStyle = {
        justifyContent: "flex-start",
        mb: 1,
        color: "black",
        fontSize: "14px",
        textTransform: "none",
        height: "40px",
        minHeight: "40px",
        '& .MuiButton-startIcon': {
            minWidth: '32px',
            color: '#444',
        },
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.04)',
        },
    };

    return (
        <Box
            sx={{
                width: '13%',
                backgroundColor: '#f0f0f0',
                height: '100vh',
                overflowY: 'auto',
                '&::-webkit-scrollbar': { width: '6px', display: 'none' ,height: '30px'},
                '&::-webkit-scrollbar-thumb': { backgroundColor: '#888', borderRadius: '4px' },
                '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#555' },
                scrollbarWidth: 'none',
                '&:hover::-webkit-scrollbar': { display: 'block' },
                '&:hover': { scrollbarWidth: 'thin', scrollbarColor: '#888 #f0f0f0' },
            }}
        >
            <Paper sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column', p: 1 }}>
                <Button fullWidth startIcon={<HomeIcon />} sx={{ ...buttonStyle, mt: 2 }}>Trang chủ</Button>
                <Button fullWidth startIcon={<OndemandVideoIcon />} sx={buttonStyle}>Short</Button>
                <Button fullWidth startIcon={<SubscriptionsIcon />} sx={buttonStyle}>Kênh đăng ký</Button>

                <Divider sx={{ my: 1 }} />
                <Typography variant="subtitle2" sx={{ px: 1, mb: 1 }}>Bạn</Typography>
                <Button fullWidth startIcon={<HistoryIcon />} sx={buttonStyle}>Video đã xem</Button>
                <Button fullWidth startIcon={<ThumbUpIcon />} sx={buttonStyle}>Video đã thích</Button>
                <Button fullWidth startIcon={<PlaylistPlayIcon />} sx={buttonStyle}>Danh sách phát</Button>
                <Button fullWidth startIcon={<WatchLaterIcon />} sx={buttonStyle}>Xem sau</Button>
                <Button fullWidth startIcon={<VideoLibraryIcon />} sx={buttonStyle}>Video của bạn</Button>

                <Divider sx={{ my: 1 }} />
                <Typography variant="subtitle2" sx={{ px: 1, mb: 1 }}>Kênh nội dung</Typography>
                <Button fullWidth startIcon={<MovieIcon />} sx={buttonStyle}>Phim & Truyền hình</Button>
                <Button fullWidth startIcon={<MovieIcon />} sx={buttonStyle}>Anime & Manga</Button>
                <Button fullWidth startIcon={<MusicNoteIcon />} sx={buttonStyle}>Âm nhạc</Button>
                <Button fullWidth startIcon={<VideoLibraryIcon />} sx={buttonStyle}>Công nghệ</Button>
                <Button fullWidth startIcon={<SportsEsportsIcon />} sx={buttonStyle}>Trò chơi</Button>
                <Button fullWidth startIcon={<SchoolIcon />} sx={buttonStyle}>Giáo dục & Học tập</Button>
                <Button fullWidth startIcon={<FastfoodIcon />} sx={buttonStyle}>Ẩm thực & Nấu ăn</Button>
                <Button fullWidth startIcon={<TravelExploreIcon />} sx={buttonStyle}>Du lịch & Văn hóa</Button>
                <Button fullWidth startIcon={<SportsIcon />} sx={buttonStyle}>Thể thao</Button>
                <Button fullWidth startIcon={<FaceIcon />} sx={buttonStyle}>Làm đẹp & Thời trang</Button>
                <Button fullWidth startIcon={<MonetizationOnIcon />} sx={buttonStyle}>Tài chính & Đầu tư</Button>
                <Button fullWidth startIcon={<Diversity3Icon />} sx={buttonStyle}>Xã hội & Đời sống</Button>

                <Divider sx={{ my: 1 }} />
                <Typography variant="subtitle2" sx={{ px: 1, mb: 1 }}>Khác</Typography>
                <Button fullWidth startIcon={<SettingsIcon />} sx={buttonStyle}>Cài đặt</Button>
                <Button fullWidth startIcon={<ReportIcon />} sx={buttonStyle}>Nhật ký báo cáo</Button>
                <Button fullWidth startIcon={<HelpIcon />} sx={buttonStyle}>Trợ giúp</Button>
                <Button fullWidth startIcon={<FeedbackIcon />} sx={buttonStyle}>Ý kiến phản hồi</Button>

                <Divider sx={{ my: 1 }} />

                {/* Bản quyền */}
                <Typography variant="subtitle2" sx={{ px: 1, mb: 1 }}>Thông tin bản quyền</Typography>

                    <Typography
                        variant="caption"
                        sx={{
                            minHeight: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width:170,
                            p: 1,
                            mb:10,
                            px: 2,
                            color: '#777',
                            fontSize: '12px',
                            textAlign: 'center',
                            pb: 2
                        }}>

                    >
                        © 2025 Goyi Corporation - Công ty Công nghệ Sáng tạo Toàn cầu.
                        Mọi quyền sở hữu trí tuệ, bao gồm nhưng không giới hạn ở nội dung,
                        thiết kế và mã nguồn, đều được bảo lưu toàn cầu. Địa chỉ trụ sở chính:
                        Tòa nhà Goyi Tower, Số 123 Đường Sáng Tạo, Quận 1, Thành phố Hồ Chí Minh,
                        Việt Nam. Vui lòng liên hệ qua email support@goyi.com để được hỗ trợ hoặc khiếu nại.
                        Chúng tôi cam kết mang đến trải nghiệm tốt nhất cho người dùng với sự đổi mới không ngừng.
                    </Typography>



            </Paper>
        </Box>
    );
}

export default SideBar;
