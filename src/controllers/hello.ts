import { Request, Response } from 'express'
import { helloService } from '@/services'

const hello = async (request: Request, response: Response) => {
    try {
        const message = await helloService.hello()

        if (message) {
            return response.json({
                message
            })
        }
    } catch (error) {
        return response.status(500).json({
            message: 'BÙM!!!'
        })
    }
}

export const helloController = {
    hello
}