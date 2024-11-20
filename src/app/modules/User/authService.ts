import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from "../../../config";
import { JwtPayload, Tuser, TuserLogin } from "./authInterface";
import { User } from "./authModel";


const createUser = async (user:Tuser)=>{
    const result = (await User.create(user))
    return result
}

const loginUserService = async (payload:TuserLogin)=>{
 
    try{
        const user = await User.findOne({ email: payload.email });

    // User not found
    if (!user) {
      throw new Error('User not found');
    }

    // User deleted
    if (user.isDeleted) {
      throw new Error('This user has been deleted');
    }

    // User blocked
    if (user.isActive === 'blocked') {
      throw new Error('This user is blocked');
    }

    // Check password
    const matchedPassword = await bcrypt.compare(payload.password,user.password);
    if (!matchedPassword) {
      throw new Error('Password does not match');
    }

    // Prepare JWT payload
    const jwtPayload: JwtPayload = {
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      isDeleted: user.isDeleted,
    };

    // Generate tokens
    const accessToken = jwt.sign(
      jwtPayload,
      config.access__token as string,
      { expiresIn: config.access__token__time as string }
    );

    const refreshToken = jwt.sign(
      jwtPayload,
      config.refresh__token as string,
      { expiresIn: config.refresh__token__time as string }
    );

    return {
      accessToken,
      refreshToken,
    };
        } catch (err:any) {
            console.log(err)
            throw new Error('Something went wrong during login. Please try again.');
        }
}

export const AuthService = {
    createUser,
    loginUserService
}