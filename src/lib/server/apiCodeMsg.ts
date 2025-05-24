/**
 * 错误配置接口
 */
export interface ErrorConfig {
    message: string
    httpStatus: number
    isOperational?: boolean
}

/**
 * 错误代码与配置映射
 */
export const ErrorMap = {
    // 系统错误 (1000-1999)
    1000: {
        message: '服务器内部错误',
        httpStatus: 500
    },
    1001: {
        message: '服务暂时不可用',
        httpStatus: 503
    },
    1002: {
        message: '数据库连接失败',
        httpStatus: 500
    },

    // 认证授权错误 (2000-2999)
    2000: {
        message: '未授权访问',
        httpStatus: 401
    },
    2001: {
        message: '无效的凭据',
        httpStatus: 401
    },
    2002: {
        message: '访问令牌已过期',
        httpStatus: 401
    },
    2003: {
        message: '访问被拒绝',
        httpStatus: 403
    },

    // 请求错误 (3000-3999)
    3000: {
        message: '无效的输入参数',
        httpStatus: 400
    },
    3001: {
        message: '请求的资源不存在',
        httpStatus: 404
    },
    3002: {
        message: '不允许的请求方法',
        httpStatus: 405
    }
} as const satisfies Record<number, ErrorConfig>

/**
 * 错误代码类型
 */
export type ErrorCode = keyof typeof ErrorMap

/**
 * 自定义错误类
 */
export class AppError extends Error {
    constructor(public readonly code: ErrorCode, public readonly details?: unknown, public readonly isOperational: boolean = true) {
        const config = ErrorMap[code]
        super(config.message)
        this.name = this.constructor.name
        Object.setPrototypeOf(this, new.target.prototype)
        Error.captureStackTrace(this, this.constructor)
    }

    get httpStatus() {
        return ErrorMap[this.code].httpStatus
    }

    public toJSON() {
        return {
            code: this.code,
            message: this.message,
            details: this.details,
            httpStatus: this.httpStatus
        }
    }
}
