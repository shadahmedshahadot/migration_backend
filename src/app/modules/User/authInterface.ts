export type Tuser = {
    name:string,
    email:string,
    password:string,
    isActive: 'active' | 'blocked',
    role: 'admin' | 'moderator' | 'user' | 'superAdmin',
    isDeleted:boolean
}

export interface JwtPayload {
    email: string;
    role: string;
    isActive: string;
    isDeleted: boolean;
  }

export type TuserLogin = {
    email:string,
    password:string
}