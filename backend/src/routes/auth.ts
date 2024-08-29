import express from 'express';
import { login, signUp } from '../modules/auth/controllers/authController';
import { authValidation } from '../modules/auth/validations/authValidation';
import { validate } from '../kernels/formatValidations';

export default (router: express.Router) => {
    router.post("/login", validate(authValidation.index), login)
    router.post("/sign-up", signUp)
}