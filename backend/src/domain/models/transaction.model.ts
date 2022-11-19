export type TransactionModel = {
    id: number;
    debitedAccountId: number;
    debitedAccountUsername: string;
    creditedAccountId: number;
    creditedAccountUsername: string;
    value: number;
    createdAt: Date;
};

export type CreateTransactionRequestModel = Pick<TransactionModel, 'creditedAccountUsername' | 'value'>;

export type ListTransactionsResponseModel = (TransactionModel & {
    debitedAccountUsername: string;
    creditedAccountUsername: string;
})[];
