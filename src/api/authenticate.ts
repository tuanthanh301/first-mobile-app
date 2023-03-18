import request from './request';

interface LoginRequestType {
    username: string;
    password: string;
}

export const loginRequest = (params: LoginRequestType) => {
    return request.post('/login',params);
} 