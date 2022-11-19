export type Transaction = {
    id: number;
    debitedAccountId: number;
    creditedAccountId: number;
    debitedAccountUsername: string;
    creditedAccountUsername: string;
    value: string;
    createdAt: string;
};

export type TransactionsListResponseModel = Transaction[];

export const nullTransactionsListResponseModel: TransactionsListResponseModel =
    [];
