export interface MessageInterface {
    field?: string;
    message?: string;
}

export interface ErrorInterface {
    readonly status: number;
    messages?: MessageInterface[];
}

export interface ExceptionInterface {
    error: ErrorInterface;
    message: string;
}
