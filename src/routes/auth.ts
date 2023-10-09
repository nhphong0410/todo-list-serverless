import express from 'express'
import { authController } from '@/controllers'

export const authRouter = express.Router()

authRouter.get('/verify', authController.verifyJWT)
