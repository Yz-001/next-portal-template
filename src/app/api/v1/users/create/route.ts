import { prisma } from '@/lib/server/prisma'
import { ApiResponse } from '@/lib/server/apiResponse'

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json()
        const data = await prisma.user.create({
            data: body
        })
        return ApiResponse.success(data)
    } catch (error: unknown) {
        return ApiResponse.error(error instanceof Error ? error.message : '', 500)
    }
}
