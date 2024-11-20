import cors from 'cors'
import express, { Application } from 'express'
import router from './app/router'
import globalErrorHandler from './app/error/globalErrorHandeler'
const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

// application routes
app.use('/api', router);
app.use(globalErrorHandler);

export default app
