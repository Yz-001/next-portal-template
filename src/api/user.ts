import { request } from '@/lib/request'

interface UserInfo {
    id: string
    name: string
    email: string
    avatar?: string
    roles: string[]
}

interface UpdateUserProfileParams {
    name?: string
    avatar?: string
}

export const getUserInfo = () => request.get<UserInfo>('/user/info')

export const getUserList = (params: { page: number; size: number }) =>
    request.get<{
        list: UserInfo[]
        total: number
    }>('/user/list', { params })

export const updateUserProfile = (data: UpdateUserProfileParams) => request.put<UserInfo>('/user/profile', data)

export const deleteUser = (userId: string) => request.del(`/user/${userId}`)
