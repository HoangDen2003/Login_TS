import BodyWithLocate from "../../../kernels/rules/body"

export const authValidation = {
    index: [
        new BodyWithLocate('email').notEmpty().isEmail().get(),
        new BodyWithLocate('password').notEmpty().isLength({ min: 8}).get()
    ],
}
