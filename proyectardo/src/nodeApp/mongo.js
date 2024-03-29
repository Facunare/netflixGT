import express from 'express'
import morgan from 'morgan'
import authRoutes from './auth.routes.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['POST', 'GET']
}))
app.use(morgan('dev'))
app.use(express.json())
app.use("/api",authRoutes)
app.use(cookieParser())
export default app;