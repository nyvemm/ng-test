import HttpService from './http.service';
import { AxiosResponse } from 'axios';
import {
    TransactionsListResponseModel,
    TransactionsListRequestModel,
    TransactionsCreateRequestModel,
} from '../models';

class TransactionsService {
    static async list(
        params: TransactionsListRequestModel
    ): Promise<AxiosResponse<TransactionsListResponseModel>> {
        return HttpService.getClient().get<
            TransactionsListResponseModel,
            AxiosResponse<TransactionsListResponseModel>
        >('/transactions', { params });
    }

    static async create(
        payload: TransactionsCreateRequestModel
    ): Promise<AxiosResponse<TransactionsListResponseModel>> {
        return HttpService.getClient().post<
            TransactionsListResponseModel,
            AxiosResponse<TransactionsListResponseModel>
        >('/transactions', payload);
    }
}

export default TransactionsService;
