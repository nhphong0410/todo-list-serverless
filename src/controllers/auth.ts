import { Request, Response } from "express"
import { authService } from "@/services"

const verifyJWT = async (request: Request, response: Response) => {
    try {
        const jwt = request.headers.authorization

        if (!jwt) {
            return response.status(401).json({
                message: 'Missing authentication'
            })
        }

        const result = await authService.verifyJWT(jwt)

        if (result) {
            return response.json({
                result
            })
        }
    } catch (error: any) {
        if (error.code === 401) {
            return response.status(401).json({
                message: error.message
            })
        }

        return response.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const authController = {
    verifyJWT
}