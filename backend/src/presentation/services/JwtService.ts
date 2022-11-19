import jwt from 'jsonwebtoken';
import { UserModel } from '@models/user.model';

export default class JwtService {
    static sign(user: Pick<UserModel, 'username' | 'password'>): string {
        return jwt.sign(user, (process.env.JWT_SECRET as string) || '123456', {
            expiresIn: '1h',
        });
    }

    static verify(token: string): string | jwt.JwtPayload {
        return jwt.verify(token, process.env.JWT_SECRET as string);
    }
}
