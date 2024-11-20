import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:path.join((process.cwd(),'.env'))})

export default {
    enviroment:process.env.NODE_ENV,
    port : process.env.PORT ,
    mongoose__connection : process.env.MONGOOSE_CONNECTION_URL,
    access__token : process.env.ACCESS__TOKEN,
    refresh__token : process.env.REFRESH__TOKEN,
    access__token__time:process.env.ACCESS_TOKEN_TIME ,
    refresh__token__time:process.env.REFRESH_TOKEN_TIME ,
}