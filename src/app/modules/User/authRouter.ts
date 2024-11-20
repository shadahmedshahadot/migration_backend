import express from 'express'
import { AuthController } from './authController'
import validateRequest from '../../middlewares/validatoinRequest'
import { loginValidation, registerValidation } from './authValidation'

const router = express.Router()

router.post('/user/create-user',validateRequest(registerValidation),AuthController.registerUser)
router.post('/user/login-user',validateRequest(loginValidation),AuthController.loginUser)


export const authRouter = router