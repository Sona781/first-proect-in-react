import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const UserAPI = {
    getUsers(currentPage = 1, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id) {
        instance.post(`follow/${id}`)
            .then(response => response.data);
    }
}

export const AuthAPI = {
    getHeader() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe });
    },
    logout() {
        return instance.delete('auth/login');
    }
}

export const ProfileAPI = {
    getStarus(userId) {
        return instance.get(`status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`status`)
    }
}