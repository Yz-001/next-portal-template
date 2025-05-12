import { alovaClient } from './alova'
import type { Method } from 'alova'

interface RequestOptions {
    url: string
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    params?: Record<string, any>
    data?: any
    headers?: Record<string, string>
    timeout?: number
    immediate?: boolean
    showError?: boolean
}

export const request = <T = any>(options: RequestOptions) => {
    return alovaClient
        .Request<T>(options.url, options.method || 'GET', {
            params: options.params,
            data: options.data,
            headers: options.headers,
            timeout: options.timeout
        })
        .then((res) => res)
        .catch((err) => {
            if (options.showError !== false) {
                console.error('Request Error:', err.message)
            }
            throw err
        })
}

export const get = <T = any>(url: string, params?: Record<string, any>, options?: Omit<RequestOptions, 'url' | 'method' | 'params'>) => {
    return request<T>({
        url,
        method: 'GET',
        params,
        ...options
    })
}

export const post = <T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'url' | 'method' | 'data'>) => {
    return request<T>({
        url,
        method: 'POST',
        data,
        ...options
    })
}

export const put = <T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'url' | 'method' | 'data'>) => {
    return request<T>({
        url,
        method: 'PUT',
        data,
        ...options
    })
}

export const del = <T = any>(url: string, params?: Record<string, any>, options?: Omit<RequestOptions, 'url' | 'method' | 'params'>) => {
    return request<T>({
        url,
        method: 'DELETE',
        params,
        ...options
    })
}

export const patch = <T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'url' | 'method' | 'data'>) => {
    return request<T>({
        url,
        method: 'PATCH',
        data,
        ...options
    })
}

export const createApiMethod = <T = any>(method: Method, showError: boolean = true) => {
    return method.catch((err) => {
        if (showError) {
            console.error('API Error:', err.message)
        }
        throw err
    })
}
