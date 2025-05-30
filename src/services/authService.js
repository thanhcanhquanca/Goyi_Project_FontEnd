import axiosConfig from "../configs/axios.config.js";

// Hàm tiện ích để lấy token từ localStorage
const getToken = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.token || null;
};

class AuthService {
    // Đăng ký
    static async register(userData) {
        try {
            const response = await axiosConfig.post('/api/auth/register', userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || { error: 'Đăng ký thất bại' };
        }
    }

    // Đăng nhập
    static async login(phoneNumber, password) {
        try {
            const response = await axiosConfig.post('/api/auth/login', {
                phoneNumber,
                password
            });

            if (response.data.token) {
                // Lưu toàn bộ response.data vào localStorage dưới key 'user'
                localStorage.setItem('user', JSON.stringify(response.data));
                // (Tùy chọn) Lưu token riêng nếu cần
                localStorage.setItem('authToken', response.data.token);
            }
            return response.data;
        } catch (error) {
            throw error.response?.data || { error: 'Đăng nhập thất bại' };
        }
    }

    // Đăng xuất
    static async logout() {
        try {
            // Gọi API logout (nếu backend yêu cầu)
            await axiosConfig.post('/api/auth/logout');
            // Xóa thông tin người dùng khỏi localStorage
            localStorage.removeItem('user');
            localStorage.removeItem('authToken');
            return { message: 'Đăng xuất thành công' };
        } catch (error) {
            throw error.response?.data || { error: 'Đăng xuất thất bại' };
        }
    }

    // Lấy thông tin người dùng từ localStorage
    static getUser() {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        return user;
    }

    // Cập nhật thông tin người dùng
    static async updateProfile(updateData) {
        try {
            const response = await axiosConfig.put('/api/auth/update-profile', updateData);
            if (response.data) {
                // Cập nhật thông tin người dùng trong localStorage
                const currentUser = AuthService.getUser();
                const updatedUser = { ...currentUser, ...response.data };
                localStorage.setItem('user', JSON.stringify(updatedUser));
            }
            return response.data;
        } catch (error) {
            throw error.response?.data || { error: 'Cập nhật thông tin thất bại' };
        }
    }

    // Làm mới token (tùy chọn, cần endpoint từ backend)
    static async refreshToken() {
        try {
            const response = await axiosConfig.post('/api/auth/refresh-token'); // Thay bằng endpoint thực tế
            if (response.data.token) {
                const user = AuthService.getUser();
                const updatedUser = { ...user, token: response.data.token };
                localStorage.setItem('user', JSON.stringify(updatedUser));
                localStorage.setItem('authToken', response.data.token);
            }
            return response.data;
        } catch (error) {
            throw error.response?.data || { error: 'Làm mới token thất bại' };
        }
    }
}

export default AuthService;