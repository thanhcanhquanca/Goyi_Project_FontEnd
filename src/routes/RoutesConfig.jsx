import { Routes, Route } from "react-router";
import ShowUserLayout from "../layouts/user/home/UserLayout.jsx";
import ContentIndex from "../components/user/ContentHomeOutlet.jsx";
import ContentProfileOutlet from "../components/user/ContentProfileOutlet.jsx";
import ContentPostOutlet from "../components/user/ContentPostOutlet.jsx";
import ShowUserManagementLayout from "../layouts/user/managemt_profile/ShowUserManagementLayout.jsx";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

function RoutesConfig() {
    // Component cho route trang chủ
    const UserContentHomeOutlet = () => (
        <section style={{ padding: "4px" }}>
            <ContentIndex />
        </section>
    );

    // Component cho route hồ sơ người dùng chi tiết
    const UserProfileOutlet = () => (
        <section style={{ padding: "4px" }}>
            <ContentProfileOutlet />
        </section>
    );

    // Component cho route hồ sơ người dùng chi tiết
    const UserPostOutlet = () => (
        <section style={{ padding: "4px" }}>
            <ContentPostOutlet />
        </section>
    );

    // Component cho route hồ sơ người dùng chi tiết
    const UserManagement = () => (
        <section style={{ padding: "4px" }}>
            <ShowUserManagementLayout />
        </section>
    );

    const ShortsOutlet = () => <div>Shorts Content</div>;
    const SubscriptionsOutlet = () => <div>Subscriptions Content</div>;
    const HistoryOutlet = () => <div>Video đã xem</div>;
    const LikedVideosOutlet = () => <div>Video đã thích</div>;
    const PlaylistsOutlet = () => <div>Danh sách phát</div>;
    const WatchLaterOutlet = () => <div>Xem sau</div>;
    const YourVideosOutlet = () => <div>Video của bạn</div>;
    const MoviesOutlet = () => <div>Phim & Truyền hình</div>;
    const AnimeOutlet = () => <div>Anime & Manga</div>;
    const MusicOutlet = () => <div>Âm nhạc</div>;
    const TechOutlet = () => <div>Công nghệ</div>;
    const GamingOutlet = () => <div>Trò chơi</div>;
    const EducationOutlet = () => <div>Giáo dục & Học tập</div>;
    const FoodOutlet = () => <div>Ẩm thực & Nấu ăn</div>;
    const TravelOutlet = () => <div>Du lịch & Văn hóa</div>;
    const SportsOutlet = () => <div>Thể thao</div>;
    const BeautyOutlet = () => <div>Làm đẹp & Thời trang</div>;
    const FinanceOutlet = () => <div>Tài chính & Đầu tư</div>;
    const LifestyleOutlet = () => <div>Xã hội & Đời sống</div>;
    const SettingsOutlet = () => <div>Cài đặt</div>;
    const ReportLogOutlet = () => <div>Nhật ký báo cáo</div>;
    const HelpOutlet = () => <div>Trợ giúp</div>;
    const FeedbackOutlet = () => <div>Ý kiến phản hồi</div>;





    // quản lý

    const DashboardContent = () => (
        <Box>
            <Typography variant="h4">Tổng quan</Typography>
            <Typography>Đây là trang tổng quan.</Typography>
        </Box>
    );

// OrdersContent.jsx
    const OrdersContent = () => (
        <Box>
            <Typography variant="h4">Nội dung</Typography>
            <Typography>Đây là trang nội dung.</Typography>
        </Box>
    );

// ReportsContent.jsx
    const ReportsContent = () => (
        <Box>
            <Typography variant="h4">Phân tích</Typography>
            <Typography>Đây là trang phân tích.</Typography>
        </Box>
    );

// IntegrationsContent.jsx
    const IntegrationsContent = () => (
        <Box>
            <Typography variant="h4">Phụ đề</Typography>
            <Typography>Đây là trang phụ đề.</Typography>
        </Box>
    );

// MoneyContent.jsx
    const MoneyContent = () => (
        <Box>
            <Typography variant="h4">Kiếm tiền</Typography>
            <Typography>Đây là trang kiếm tiền.</Typography>
        </Box>
    );

// CustomizeContent.jsx
    const CustomizeContent = () => (
        <Box>
            <Typography variant="h4">Tùy chỉnh</Typography>
            <Typography>Đây là trang tùy chỉnh.</Typography>
        </Box>
    );

// LiveClipContent.jsx
    const LiveClipContent = () => (
        <Box>
            <Typography variant="h4">Clip trực tuyến</Typography>
            <Typography>Đây là trang clip trực tuyến.</Typography>
        </Box>
    );

// CopyrightContent.jsx
    const CopyrightContent = () => (
        <Box>
            <Typography variant="h4">Bản quyền</Typography>
            <Typography>Đây là trang bản quyền.</Typography>
        </Box>
    );

// SettingsContent.jsx
    const SettingsContent = () => (
        <Box>
            <Typography variant="h4">Cài đặt</Typography>
            <Typography>Đây là trang cài đặt.</Typography>
        </Box>
    );





// management-admin

    const ShowAdminLayout = () => (
        <Box>
            <Typography variant="h4">admin</Typography>
            <Typography>Đây là trang admin</Typography>
        </Box>
    );

    const AdminContent = () => (
        <Box>
            <Typography variant="h4">AdminUserContent</Typography>
            <Typography>Đây là trang AdminUserContent</Typography>
        </Box>
    );

    const AdminSideBar = () => (
        <Box>
            <Typography variant="h4">AdminUserContent</Typography>
            <Typography>Đây là trang AdminUserContent</Typography>
        </Box>
    );


    return (
        <Routes>
            <Route path="/home" element={<ShowUserLayout />}>
                {/* Route con users */}
                <Route index element={<UserContentHomeOutlet />} />
                <Route path="user-profile" element={<UserProfileOutlet />} />
                <Route path="user-post" element={<UserPostOutlet />} />
                <Route path="shorts" element={<ShortsOutlet />} />
                <Route path="subscriptions" element={<SubscriptionsOutlet />} />
                <Route path="history" element={<HistoryOutlet />} />
                <Route path="liked-videos" element={<LikedVideosOutlet />} />
                <Route path="playlists" element={<PlaylistsOutlet />} />
                <Route path="watch-later" element={<WatchLaterOutlet />} />
                <Route path="your-videos" element={<YourVideosOutlet />} />
                <Route path="movies" element={<MoviesOutlet />} />
                <Route path="anime" element={<AnimeOutlet />} />
                <Route path="music" element={<MusicOutlet />} />
                <Route path="tech" element={<TechOutlet />} />
                <Route path="gaming" element={<GamingOutlet />} />
                <Route path="education" element={<EducationOutlet />} />
                <Route path="food" element={<FoodOutlet />} />
                <Route path="travel" element={<TravelOutlet />} />
                <Route path="sports" element={<SportsOutlet />} />
                <Route path="beauty" element={<BeautyOutlet />} />
                <Route path="finance" element={<FinanceOutlet />} />
                <Route path="lifestyle" element={<LifestyleOutlet />} />
                <Route path="settings" element={<SettingsOutlet />} />
                <Route path="report-log" element={<ReportLogOutlet />} />
                <Route path="help" element={<HelpOutlet />} />
                <Route path="feedback" element={<FeedbackOutlet />} />
            </Route>

            {/* Route con management-users-profile */}
            <Route path="/management-profile" element={<ShowUserManagementLayout />}>
                <Route path="dashboard" element={<DashboardContent />} />
                <Route path="orders" element={<OrdersContent />} />
                <Route path="reports" element={<ReportsContent />} />
                <Route path="integrations" element={<IntegrationsContent />} />
                <Route path="money" element={<MoneyContent />} />
                <Route path="customize" element={<CustomizeContent />} />
                <Route path="live_clip" element={<LiveClipContent />} />
                <Route path="copyright" element={<CopyrightContent />} />
                <Route path="settings" element={<SettingsContent />} />
                <Route index element={<DashboardContent />} /> {/* Route mặc định */}
            </Route>

            {/* Route con admin */}
            <Route path="/management-admin" element={<ShowAdminLayout />}>
                <Route path="sidebar" element={<AdminSideBar />} />
                <Route index element={<AdminContent />} /> {/* Route mặc định */}
            </Route>

        </Routes>
    );
}

export default RoutesConfig;
