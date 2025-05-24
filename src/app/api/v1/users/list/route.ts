import { prisma } from '@/lib/server/prisma'
import { ApiResponse } from '@/lib/server/apiResponse'
export async function GET(req: Request, res: Response) {
    try {
        const data = await prisma.user.findMany() // all list
        return ApiResponse.success(data)
    } catch (error: unknown) {
        return ApiResponse.error(error instanceof Error ? error.message : '', 500)
    }
}
