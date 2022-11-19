export type AccountsBalanceResponseModel = {
    userId: number;
    accountId: number;
    balance: string;
    username: string;
};

export const nullAccountsBalanceResponseModel: AccountsBalanceResponseModel = {
    userId: -1,
    accountId: -1,
    balance: '',
    username: '',
};
