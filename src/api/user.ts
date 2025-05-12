import { alovaClient } from '@/lib/alova'

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

export const getUserInfo = () => alovaClient.Get<UserInfo>('/user/info')

export const getUserList = (params: { page: number; size: number }) =>
    alovaClient.Get<{
        list: UserInfo[]
        total: number
    }>('/user/list', { params })

export const updateUserProfile = (data: UpdateUserProfileParams) => alovaClient.Put<UserInfo>('/user/profile', data)

export const deleteUser = (userId: string) => alovaClient.Delete(`/user/${userId}`)
