import httpStatus from 'http-status-codes'
import catchAsync from '../../utils/CatchAsync'
import sendResponse from '../../utils/SendResponce'
import { AuthService } from './authService'
import config from '../../../config'

// register new user
const registerUser = catchAsync(async (req, res) => {
  const result = await AuthService.createUser(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  })
})

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUserService(req.body)
  const { accessToken, refreshToken } = result
  res.cookie('refreshToken', refreshToken, {
    secure: config.enviroment === 'production',
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'user login successfully',
    data: { accessToken: accessToken },
  })
})

export const AuthController = {
  registerUser,
  loginUser,
}
