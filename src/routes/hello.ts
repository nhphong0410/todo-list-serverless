import express from 'express'
import { helloController } from 'src/controllers'

export const helloRouter = express.Router()

helloRouter.get('/', helloController.hello)
