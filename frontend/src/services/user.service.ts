import HttpService from './http.service';
import { AxiosResponse } from 'axios';
import {
    UserLoginRequestModel,
    UserLoginResponseModel,
    UserSignupRequestModel,
} from '../models';

class UserService {
    static async signup(payload: UserSignupRequestModel) {
        return HttpService.getClient().post<UserSignupRequestModel>(
            '/signup',
            payload
        );
    }

    static async login(payload: UserLoginRequestModel) {
        return HttpService.getClient().post<
            UserLoginResponseModel,
            AxiosResponse<UserLoginResponseModel>
        >('/login', payload);
    }

    static async logout() {
        return HttpService.getClient().post('/logout');
    }
}

export default UserService;
