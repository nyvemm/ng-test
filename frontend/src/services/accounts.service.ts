import HttpService from './http.service';
import { AxiosResponse } from 'axios';
import { AccountsBalanceResponseModel } from '../models';

class AccountsService {
    static async getBalance() {
        return HttpService.getClient().get<
            AccountsBalanceResponseModel,
            AxiosResponse<AccountsBalanceResponseModel>
        >('/balance');
    }
}

export default AccountsService;
