import Database from '@db/database';
import JwtService from '@services/JwtService';
import HashService from '@services/HashService';
import { UserModel } from '@models/user.model';
import UnauthorizedException from '@exceptions/UnauthorizedException';
import InternalServerException from '@exceptions/InternalServerException';

export class UserService {
    static checkIfUserExists = async (username: string): Promise<boolean> => {
        /* Verifying if the user already exists */
        const user = await Database.from('users').where({ username }).first();
        return user !== undefined;
    };

    static createUser = async (username: string, password: string): Promise<void> => {
        const trx = await Database.transaction();

        try {
            /* Creating an account for the user */
            const accountId = await trx('accounts').insert({}).returning('id');

            /* Inserting the user into the database */
            await trx('users').insert({
                username,
                accountId: accountId?.[0]?.id,
                password: HashService.hash(password),
            });

            await trx.commit();
        } catch (error) {
            await trx.rollback();
            throw new InternalServerException();
        }
    };

    static login = async (username: string, password: string): Promise<UserModel> => {
        const exception = new UnauthorizedException('Usuário ou senha inválidos');
        const user = await Database('users').where({ username }).first();

        if (!user) {
            throw exception;
        }

        // Verifying if the hashed password is the same as the one in the database
        if (HashService.hash(password) !== user.password) {
            throw exception;
        }

        // Generate a token for the user
        const token = JwtService.sign({ username: user.password, password: user.password });

        // Updating the user token in the database
        await Database('users').where({ username }).update({ token });

        return { ...user, token };
    };

    static getUserByToken = async (token: string): Promise<UserModel> => {
        return Database('users').where({ token }).first();
    };

    static getUserByUsername = async (username: string): Promise<UserModel> => {
        return Database('users').where({ username }).first();
    };

    static validateToken = async (token: string): Promise<Boolean> => {
        try {
            const decodedToken = JwtService.verify(token);

            let isNotExpired = false;
            /* Verify if the token is expired */
            if (typeof decodedToken === 'object' && decodedToken !== null) {
                const { exp } = decodedToken as { exp: number };
                const now = new Date().getTime() / 1000;

                isNotExpired = exp > now;
            }

            const user = UserService.getUserByToken(token);

            return user !== undefined && isNotExpired;
        } catch {
            return false;
        }
    };

    static logout = async (token: string): Promise<void> => {
        await Database('users').where({ token }).update({ token: null });
    };
}
