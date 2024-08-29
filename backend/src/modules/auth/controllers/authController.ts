import express from 'express';
import { loginService, registerService } from '../services/authService';
import { error, ok, unauthorized } from "../../../utils/responseUtils";

export const signUp = async (req: express.Request, res: express.Response) => {
    try {
        const user = await registerService(req.body);
        return ok(res, user)
    } catch (err: any) {
        return error(res, err.message)
    }
}

/**
 * success => res.status(200) 
 * error => res.status(401) 
 */
export const login = async (req: express.Request, res: express.Response) => {
    try {
        const user = await loginService(req.body);
        return ok(res, user)
    } catch (err: any) {
        return unauthorized(res, err.message)
    }
}
