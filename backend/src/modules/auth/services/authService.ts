import User from "../../../models/user";
import { hash, compare } from 'bcryptjs';
import { sign } from "../../../utils/jwtUtils";

export const registerService = async (req: any) => {
    const salt = 10;
    const hashedPassword = await hash(req.password, salt);
    const user = await User.create({
        email: req.email,
        password: hashedPassword
    });
    return user
}

export const loginService = async (req: any) => {
    const user = await User.findOne({ where: { email: req.email } });
    if (!user) throw new Error('User not found')
    if (!await compare(req.password, user.password)) throw new Error('Email or password is incorrect')
    const token: string = sign(user.email, user.password)
    return { id: user.id, email: user.email, token }
}
