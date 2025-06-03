import { NextResponse } from 'next/server'

export class ApiResponse {
    static success(data: unknown, message: string = 'Success', code: number = 200) {
        return NextResponse.json(
            {
                success: true,
                message,
                code,
                data
            }
        )
    }

    static error(message: string = 'Error', code: number = 400) {
        return NextResponse.json(
            {
                success: false,
                message,
                code,
                data: null
            }
        )
    }
}
