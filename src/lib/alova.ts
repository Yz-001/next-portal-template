import { createAlova } from 'alova'
import { axiosRequestAdapter } from '@alova/adapter-axios'
import ReactHook from 'alova/react'

interface ApiError {
    status: number
    message: string
    code?: string
    timestamp?: string
    path?: string
    details?: Record<string, unknown>
}

declare module 'alova' {
    interface ResponseError {
        // 添加你的自定义错误属性
        status: number
        message: string
        code?: string
        timestamp?: string
        path?: string
        details?: Record<string, unknown>
    }
}

const globalResponseInterceptor = (response: any) => {
    return response.data
}

const globalErrorInterceptor = (error: any) => {
    let errorInfo: ApiError = {
        status: 0,
        message: 'Unknown error'
    }

    if (error.response) {
        const { status, data } = error.response
        errorInfo = {
            status,
            message: data?.message || error.message,
            code: data?.code,
            timestamp: data?.timestamp,
            path: data?.path,
            details: data?.details
        }

        switch (status) {
            case 400:
                errorInfo.message = errorInfo.message || 'Bad Request'
                break
            case 401:
                errorInfo.message = errorInfo.message || 'Unauthorized'
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('token')
                    window.location.href = `/login?redirect=${encodeURIComponent(window.location.pathname)}`
                }
                break
            case 403:
                errorInfo.message = errorInfo.message || 'Forbidden'
                break
            case 404:
                errorInfo.message = errorInfo.message || 'Not Found'
                break
            case 429:
                errorInfo.message = errorInfo.message || 'Too Many Requests'
                break
            case 500:
                errorInfo.message = errorInfo.message || 'Internal Server Error'
                break
            default:
                errorInfo.message = errorInfo.message || `HTTP Error: ${status}`
        }
    } else if (error.request) {
        errorInfo.message = 'Network Error: No response received'
    } else {
        errorInfo.message = error.message || 'Request Error'
    }

    return Promise.reject(errorInfo)
}

// 1. 首先创建axios适配器实例
const adapter = axiosRequestAdapter()

export const alovaClient = createAlova({
    baseURL: process.env.NEXT_PUBLIC_APP_BASE_API,
    statesHook: ReactHook,

    // 2. 正确配置requestAdapter
    requestAdapter: adapter,
    beforeRequest(method) {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
        if (token) {
            method.config.headers.Authorization = `Bearer ${token}`
        }
    },
    // 3. 确保responded配置正确
    responded: {
        onSuccess: globalResponseInterceptor,
        onError: globalErrorInterceptor
    }
})
