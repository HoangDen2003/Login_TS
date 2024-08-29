import jwt from 'jsonwebtoken';
import { config } from '../configs/config'

export const sign = (email: string, password: string) => {
    const token = jwt.sign(
        { 
            email
        }, 
        config.secret, 
        { 
            expiresIn: config.ttl 
        }
    )
    return token
}