import jwt, { Secret } from 'jsonwebtoken';

export const createToken = (id: string,email: string,expiresIn: string) => {
    const payload = {id, email};
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in the environment.');
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET as Secret, {
        expiresIn,
    });
    return token;
}