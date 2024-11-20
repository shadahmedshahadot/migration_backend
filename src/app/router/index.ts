import express from 'express';
import { authRouter } from '../modules/User/authRouter';

const router = express.Router()


const websiteRoute = [
    {
        path:'/auth',
        route:authRouter
    }
]

websiteRoute.forEach((route) => router.use(route.path, route.route));
export default router