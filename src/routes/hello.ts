import express from 'express'
import { helloController } from '@/controllers'

export const helloRouter = express.Router()

helloRouter.get('/', helloController.hello)
