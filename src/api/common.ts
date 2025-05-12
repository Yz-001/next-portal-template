import { alovaClient } from '@/lib/alova'

export interface LoginParams {
    username: string
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

export const login = (data: LoginParams) => alovaClient.Post<LoginResponse>('/auth/login', data)

export const logout = () => alovaClient.Post('/auth/logout')

export const refreshToken = () => alovaClient.Post<{ token: string; expiresIn: number }>('/auth/refresh')
