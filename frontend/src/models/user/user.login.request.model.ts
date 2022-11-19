export type UserLoginRequestModel = {
    username: string;
    password: string;
};

export const nullUserLoginRequestModel: UserLoginRequestModel = {
    username: '',
    password: '',
};
