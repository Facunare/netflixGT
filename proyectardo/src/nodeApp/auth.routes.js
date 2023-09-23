import { Router } from "express";
import {login, register, logout, addFavorite} from './auth.controller.js'
import { authRequired } from './validateToken.js'
import { validateSchema } from "./validator.middleware.js";
import { registerSchema, loginSchema } from "./auth.schema.js";
const router = Router()
router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)

router.post('/addFavorite', authRequired, addFavorite)
export default router