import jwt from 'jsonwebtoken';
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in the environment.');
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};
//# sourceMappingURL=token-manager.js.map