export type TransactionsListRequestModel = {
    limit?: number;
    page?: number;
    startDate?: string;
    endDate?: string;
    type?: 'cash-in' | 'cash-out';
};

export const nullTransactionsListRequestModel: TransactionsListRequestModel = {
    limit: 50,
    page: 1,
};
