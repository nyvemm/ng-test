export type ApiErrorMessageModel = {
    field?: string;
    message: string;
};

export type ApiErrorModel = {
    status: number;
    messages: ApiErrorMessageModel[];
};

export const nullApiErrorModel: ApiErrorModel = {
    status: -1,
    messages: [],
};
