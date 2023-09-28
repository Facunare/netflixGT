import { Router } from "express";
import {login, register, logout, addFavorite, verifyToken} from './auth.controller.js'
import { authRequired } from './validateToken.js'
import { validateSchema } from "./validator.middleware.js";
import { registerSchema, loginSchema } from "./auth.schema.js";
import cookieParser from "cookie-parser";
const router = Router()
router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.use(cookieParser());
router.post('/logout', authRequired, logout)
router.get('/verify', verifyToken)

router.post('/addFavorite/:id', authRequired, addFavorite);

export default router