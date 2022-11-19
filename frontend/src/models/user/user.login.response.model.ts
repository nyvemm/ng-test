export type UserLoginResponseModel = {
    id: number;
    username: string;
    password: string;
    token: string;
};

export const nullUserLoginResponseModel: UserLoginResponseModel = {
    id: -1,
    username: '',
    password: '',
    token: '',
};
