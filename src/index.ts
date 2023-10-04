import express from 'express'
import serverless from 'serverless-http'
import bodyParser from 'body-parser'
import cors from 'cors'
import { helloRouter } from './routes'

const app = express()

app.use(cors({ origin: '*' }))
app.use(bodyParser.json({ strict: false }))
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/api/hello', helloRouter)

module.exports.handler = serverless(app);
