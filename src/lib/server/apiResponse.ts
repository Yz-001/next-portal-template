import { NextResponse } from 'next/server'

export class ApiResponse {
    static success(data: unknown, message: string = 'Success', status: number = 200) {
        return NextResponse.json(
            {
                success: true,
                message,
                data
            },
            { status }
        )
    }

    static error(message: string = 'Error', status: number = 400) {
        return NextResponse.json(
            {
                success: false,
                message,
                data: null
            },
            { status }
        )
    }
}
