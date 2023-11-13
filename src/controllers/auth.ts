import { Request, Response } from 'express'
import { authService } from '@/services'

const verifyJWT = async (request: Request, response: Response) => {
    try {
        const jwt = request.headers.authorization
        const id = request.query?.id

        if (!jwt) {
            return response.status(401).json({
                message: 'Missing authentication'
            })
        }
        if (!id || typeof (id) !== 'string') {
            return response.status(401).json({
                message: 'Invalid user id'
            })
        }

        const result = await authService.verifyJWT(jwt, id)

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