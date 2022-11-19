export type UserSignupRequestModel = {
    username: string;
    password: string;
    confirmPassword: string;
};

export const nullUserSignupRequestModel: UserSignupRequestModel = {
    username: '',
    password: '',
    confirmPassword: '',
};
