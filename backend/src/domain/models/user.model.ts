export type UserModel = {
    id: number;
    username: string;
    password: string;
    token: string;
    accountId: number;
};

export type UserSignupRequestModel = Pick<UserModel, 'username' | 'password'> & { confirmPassword: string };

export type LoginRequestModel = Omit<UserSignupRequestModel, 'confirmPassword'>;
