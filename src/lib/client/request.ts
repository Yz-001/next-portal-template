import { createAlova } from 'alova'
import { axiosRequestAdapter } from '@alova/adapter-axios'
import ReactHook from 'alova/react'
import type { AxiosResponse } from 'axios'
import { getToken } from '@/lib/storage'

// ---------- 类型定义 ----------
export interface ApiError {
    status: number
    message: string
    code?: string
    timestamp?: string
    path?: string
    details?: Record<string, unknown>
}

type RequestOptions = {
    headers?: Record<string, string>
    timeout?: number
}

// 扩展 Alova ResponseError 类型
declare module 'alova' {
    interface ResponseError extends ApiError {}
}

// ---------- 状态码映射 ----------
const httpErrorMessages: Record<number, string> = {
    400: '请求参数有误',
    401: '未登录或身份已过期',
    403: '没有权限访问该资源',
    404: '资源不存在',
    429: '请求频率过高',
    500: '服务器内部错误'
}

// ---------- 响应拦截器 ----------
const globalResponseInterceptor = <T = any>(response: AxiosResponse<T>): T => {
    return response.data
}

// ---------- 错误拦截器 ----------
const globalErrorInterceptor = (error: any): Promise<void> => {
    let message = '未知错误'

    if (error.response) {
        const { status, data } = error.response
        message = data?.message || httpErrorMessages[status] || `HTTP 错误: ${status}`

        if (status === 401 && typeof window !== 'undefined') {
            localStorage.removeItem('token')
            window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`
        }
    } else if (error.request) {
        message = '网络错误：未收到服务器响应'
    } else {
        message = error.message || '请求配置异常'
    }

    if (process.env.NODE_ENV === 'development') {
        console.error('[alova error]', message)
    }

    return Promise.reject()
}

// ---------- 创建 Alova 实例 ----------
const adapter = axiosRequestAdapter()

export const alovaClient = createAlova({
    baseURL: process.env.NEXT_PUBLIC_APP_BASE_API,
    statesHook: ReactHook,
    requestAdapter: adapter,
    beforeRequest(method) {
        const token = typeof window !== 'undefined' ? getToken() : null
        if (token) {
            method.config.headers.Authorization = `Bearer ${token}`
        }
    },
    responded: {
        onSuccess: globalResponseInterceptor,
        onError: globalErrorInterceptor
    }
})

// ---------- 请求方法封装 ----------
export const request = {
    get: <T>(url: string, params?: Record<string, any>, options?: RequestOptions) => alovaClient.Get<T>(url, { params, ...options }).send(),

    post: <T>(url: string, data?: any, options?: RequestOptions) => alovaClient.Post<T>(url, data, options).send(),

    put: <T>(url: string, data?: any, options?: RequestOptions) => alovaClient.Put<T>(url, data, options).send(),

    delete: <T>(url: string, params?: Record<string, any>, options?: RequestOptions) =>
        alovaClient.Delete<T>(url, { params, ...options }).send(),

    patch: <T>(url: string, data?: any, options?: RequestOptions) => alovaClient.Patch<T>(url, data, options).send()
}
