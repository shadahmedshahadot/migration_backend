import {z} from 'zod'


export const registerValidation = z.object({
    body:z.object({
        name:z.string(),
        email:z.string(),
        password:z.string(),
        isActive:z.enum(['active' , 'blocked']).default('active'),
        role:z.enum(['admin' , 'moderator' , 'user' , 'superAdmin']),
        isDeleted:z.boolean().default(false)
    })  
})

export const loginValidation = z.object({
    body:z.object({
        email:z.string(),
        password:z.string()
    })
})