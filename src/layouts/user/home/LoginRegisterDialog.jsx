import React, { useState } from 'react';
import { Box, Dialog, Grid, Typography, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ClearIcon from '@mui/icons-material/Clear';

// Component này dùng để hiển thị dialog đăng nhập và đăng ký người dùng
const LoginRegisterDialog = ({ open, onClose, tabValue, handleTabChange }) => {
    const [phone, setPhone] = useState(''); // Quản lý giá trị số điện thoại
    const [password, setPassword] = useState(''); // Quản lý giá trị mật khẩu
    const [confirmPassword, setConfirmPassword] = useState(''); // Quản lý giá trị xác nhận mật khẩu
    const [showPassword, setShowPassword] = useState(false); // Quản lý trạng thái hiển thị mật khẩu
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Quản lý trạng thái hiển thị xác nhận mật khẩu

    // Hàm để chuyển đổi trạng thái hiển thị/ẩn mật khẩu
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <Dialog
            open={open} // Trạng thái mở dialog (true/false)
            onClose={onClose} // Hàm đóng dialog
            fullScreen // Dialog chiếm toàn màn hình
            sx={{
                '& .MuiDialog-paper': {
                    backgroundColor: 'rgba(0,0,0,0.5)', // Màu nền mờ cho dialog
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            }}
        >
            {/* Container chính của dialog với kích thước và nền tùy chỉnh */}
            <Box
                // sx={{
                //     width: '830px',
                //     height: '430px',
                //     maxWidth: '90vw',
                //     borderRadius: 3,
                //     bgcolor: '#eeeef1',
                //     p: 2,
                //     boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                //     position: 'relative',
                // }}
                sx={{
                    width: '830px',
                    height: '430px',
                    maxWidth: '90vw',
                    borderRadius: 3,
                    bgcolor: '#eeeef1',
                    p: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    position: 'relative',
                    backgroundImage: 'url("https://th.bing.com/th/id/R.71edbc386a6f536709aaf9336d892362?rik=7eig%2bjHBZN%2fuYg&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn%2fw819h472%2f20180125%2f0a24-fyqwiqk6670633.png&ehk=rcI08Cc7Pxg9qlRfXwrp%2fKiChoENLBJYBePwMvdH1I0%3d&risl=&pid=ImgRaw&r=0")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Nút đóng dialog ở góc trên bên phải */}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: '#fff',
                    }}
                >
                    <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: '#818181', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px' }}>
                        <ClearIcon />
                    </Box>
                </IconButton>

                {/* Nội dung chính của dialog */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, bgcolor: '#eeeef1', width: '100%', height: '100%' }}>
                    {/* Sử dụng Grid để chia bố cục thành 2 phần: QR Code (30%) và Form đăng nhập/đăng ký (70%) */}
                    <Grid container sx={{ height: '100%' }}>
                        {/* Phần 30% hiển thị QR Code để đăng nhập qua app */}
                        <Grid
                            item
                            xs={3.6}
                            sx={{
                                bgcolor: '#eeeef1',
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                width: '300px',
                                marginLeft: '10px',
                                marginTop: '30px',
                                height: '320px',
                                position: 'relative',
                            }}
                        >
                            {/* Tiêu đề của phần QR Code */}
                            <Box>
                                <Typography variant="body2" color="black" sx={{ mb: 1, fontSize: '16px', textAlign: 'center' }}>
                                    Đăng nhập bằng QR Code app
                                </Typography>
                            </Box>

                            {/* Hình ảnh QR Code */}
                            <Box
                                sx={{
                                    height: '150px',
                                    width: '150px',
                                    bgcolor: '#939393',
                                    marginTop: '20px',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://google.com"
                                    alt="QR Code"
                                    style={{ height: '100%', width: '100%', borderRadius: '4px' }}
                                />
                            </Box>

                            {/* Thông báo tải app */}
                            <Box sx={{ marginTop: '30px' }}>
                                <Typography variant="body2" color="black" sx={{ mb: '1px', fontSize: '14px', textAlign: 'center' }}>
                                    Tải xuống app GOYI
                                </Typography>
                            </Box>

                            {/* Vạch phân cách dọc giữa QR Code và form */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: 0,
                                    height: '90%',
                                    width: '1px',
                                    backgroundColor: 'rgba(101,101,101,0.43)',
                                    marginTop: '20px',
                                }}
                            />
                        </Grid>

                        {/* Phần 70% hiển thị form đăng nhập/đăng ký */}
                        <Grid
                            item
                            xs={8.4}
                            sx={{ bgcolor: '#eeeef1', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-center', width: '500px', height: '350px' }}
                        >
                            {/* Tabs để chuyển đổi giữa Đăng nhập và Đăng ký */}
                            <Box
                                sx={{
                                    mb: 1,
                                    mt: '30px',
                                    width: '500px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    mx: 'auto',
                                }}
                            >
                                {/* Tab Đăng nhập */}
                                <Typography
                                    variant="h6"
                                    component="span"
                                    onClick={() => handleTabChange(null, 0)}
                                    sx={{
                                        cursor: 'pointer',
                                        minWidth: '140px',
                                        textAlign: 'center',
                                        '&:hover': { textDecoration: 'underline' },
                                        fontWeight: tabValue === 0 ? 'bold' : 'normal',
                                        textDecoration: tabValue === 0 ? 'underline' : 'none',
                                        fontSize: '16px',
                                        color: tabValue === 0 ? 'primary.main' : '#333333',
                                    }}
                                >
                                    Đăng nhập Goyi
                                </Typography>

                                {/* Dấu phân cách giữa hai tab */}
                                <Typography
                                    variant="h6"
                                    component="span"
                                    sx={{
                                        width: '30px',
                                        textAlign: 'center',
                                        fontSize: '16px',
                                    }}
                                >
                                    |
                                </Typography>

                                {/* Tab Đăng ký */}
                                <Typography
                                    variant="h6"
                                    component="span"
                                    onClick={() => handleTabChange(null, 1)}
                                    sx={{
                                        cursor: 'pointer',
                                        minWidth: '140px',
                                        textAlign: 'center',
                                        '&:hover': { textDecoration: 'underline' },
                                        fontWeight: tabValue === 1 ? 'bold' : 'normal',
                                        textDecoration: tabValue === 1 ? 'underline' : 'none',
                                        fontSize: '16px',
                                        color: tabValue === 1 ? 'primary.main' : '#333333',
                                    }}
                                >
                                    Đăng ký Goyi
                                </Typography>
                            </Box>

                            {/* Form Đăng ký (hiển thị khi tabValue === 1) */}
                            {tabValue === 1 && (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        mb: 1.5,
                                        p: 2,
                                        border: '1px solid #ccc',
                                        borderRadius: '8px',
                                        width: '82%',
                                        backgroundColor: '#fafafa',
                                        marginLeft: '30px',
                                    }}
                                >
                                    {/* Trường nhập số điện thoại */}
                                    <MuiTelInput
                                        value={phone}
                                        onChange={(newValue) => setPhone(newValue)}
                                        defaultCountry="VN"
                                        forceCallingCode
                                        disableFormatting
                                        placeholder="Nhập số điện thoại"
                                        sx={{
                                            mb: 2,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '4px',
                                                height: '44px',
                                                '& input': {
                                                    paddingLeft: '1px',
                                                    fontSize: '16px',
                                                },
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#ccc',
                                            },
                                        }}
                                        aria-label="Nhập số điện thoại"
                                    />

                                    {/* Trường nhập mật khẩu */}
                                    <TextField
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        sx={{
                                            mb: 2,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '4px',
                                                height: '44px',
                                                '& input': {
                                                    fontSize: '16px',
                                                },
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#ccc',
                                            },
                                        }}
                                        placeholder="Nhập mật khẩu"
                                        aria-label="Nhập mật khẩu"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start" sx={{ mr: 2.5 }}>
                                                    <Box component="span" sx={{ fontSize: '16px', whiteSpace: 'nowrap', color: 'black' }}>
                                                        Mật khẩu
                                                    </Box>
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleClickShowPassword} edge="end">
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    {/* Trường xác nhận mật khẩu */}
                                    <TextField
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        sx={{
                                            mb: 2,
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '4px',
                                                height: '44px',
                                                '& input': {
                                                    fontSize: '16px',
                                                },
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: '#ccc',
                                            },
                                        }}
                                        placeholder="Nhập lại mật khẩu"
                                        aria-label="Nhập lại mật khẩu"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start" sx={{ mr: 2.5 }}>
                                                    <Box component="span" sx={{ fontSize: '16px', whiteSpace: 'nowrap', color: 'black' }}>
                                                        Xác nhận
                                                    </Box>
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleClickShowConfirmPassword} edge="end">
                                                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    {/* Nút Đăng ký */}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            width: '200px',
                                            alignSelf: 'center',
                                            mt: 1,
                                            textTransform: 'none',
                                            fontSize: '16px',
                                            borderRadius: '6px',
                                        }}
                                    >
                                        Đăng ký
                                    </Button>
                                </Box>
                            )}

                            {/* Form Đăng nhập (hiển thị khi tabValue === 0) */}
                            {tabValue === 0 && (
                                <Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            mb: 1.5,
                                            p: 2,
                                            border: '1px solid #ccc',
                                            borderRadius: '8px',
                                            width: '82%',
                                            backgroundColor: '#fafafa',
                                            marginLeft: '30px',
                                        }}
                                    >
                                        {/* Trường nhập tài khoản */}
                                        <TextField
                                            type="text"
                                            sx={{
                                                mb: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '4px',
                                                    height: '44px',
                                                    '& input': {
                                                        fontSize: '16px',
                                                    },
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#ccc',
                                                },
                                            }}
                                            placeholder="Nhập tài khoản"
                                            aria-label="Nhập tài khoản"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start" sx={{ mr: 2.5 }}>
                                                        <Box component="span" sx={{ fontSize: '16px', whiteSpace: 'nowrap', color: 'black' }}>
                                                            Tài khoản
                                                        </Box>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                        {/* Trường nhập mật khẩu */}
                                        <TextField
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            sx={{
                                                mb: 1,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '4px',
                                                    height: '44px',
                                                    '& input': {
                                                        fontSize: '16px',
                                                    },
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#ccc',
                                                },
                                            }}
                                            placeholder="Nhập mật khẩu"
                                            aria-label="Nhập mật khẩu"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start" sx={{ mr: 2.5 }}>
                                                        <Box component="span" sx={{ fontSize: '16px', whiteSpace: 'nowrap', color: 'black' }}>
                                                            Mật khẩu
                                                        </Box>
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={handleClickShowPassword} edge="end">
                                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                        {/* Liên kết Quên mật khẩu */}
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, mt: 1 }}>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#1976d2',
                                                    cursor: 'pointer',
                                                    textDecoration: 'underline',
                                                    fontSize: '14px',
                                                }}
                                            >
                                                Quên mật khẩu?
                                            </Typography>
                                        </Box>

                                        {/* Nút Đăng nhập */}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{
                                                alignSelf: 'center',
                                                textTransform: 'none',
                                                fontSize: '16px',
                                                borderRadius: '6px',
                                                width: '200px',
                                            }}
                                        >
                                            Đăng nhập
                                        </Button>
                                    </Box>
                                </Box>
                            )}
                        </Grid>

                        {/* Phần thông báo điều khoản sử dụng */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    px: 2,
                                    color: '#292929',
                                    fontSize: '14px',
                                    marginLeft: '170px',
                                    marginRight: '170px',
                                }}
                            >
                                <Typography variant="body2" sx={{ fontSize: '14px', lineHeight: 1.6 }}>
                                    Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với{' '}
                                    <Box
                                        component="span"
                                        sx={{ color: '#1976d2', cursor: 'pointer', textDecoration: 'underline' }}
                                        onClick={() => alert('Thỏa thuận người dùng')}
                                    >
                                        Thỏa thuận người dùng
                                    </Box>{' '}
                                    và{' '}
                                    <Box
                                        component="span"
                                        sx={{ color: '#1976d2', cursor: 'pointer', textDecoration: 'underline' }}
                                        onClick={() => alert('Chính sách bảo mật')}
                                    >
                                        Chính sách bảo mật
                                    </Box>.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Dialog>
    );
};

export default LoginRegisterDialog;