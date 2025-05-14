import { request } from '@/lib/request'

export interface LoginParams {
    userName: string
    password: string
}

export interface LoginResponse {
    token: string
    expiresIn: number
    user: {
        id: string
        name: string
    }
}

export const login = (data: LoginParams) => request.post<LoginResponse>('/admin/admin-user/login', data)

export const logout = () => request.post('/auth/logout')

export const refreshToken = () => request.post<{ token: string; expiresIn: number }>('/auth/refresh')
