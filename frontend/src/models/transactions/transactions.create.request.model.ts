export type TransactionsCreateRequestModel = {
    creditedAccountUsername: string;
    value: string;
};

export const nullTransactionsCreateRequestModel: TransactionsCreateRequestModel =
    {
        creditedAccountUsername: '',
        value: '1.00',
    };
