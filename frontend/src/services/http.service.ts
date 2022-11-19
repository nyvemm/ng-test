import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ApiErrorModel } from '../models';

const USE_PROXY = true;
const PROXY_URL = 'http://localhost:80/api';
const DEV_URL = 'http://localhost:3000/';

class HttpService {
    private static client: AxiosInstance;

    static setup() {
        this.client = axios.create({
            baseURL: USE_PROXY ? PROXY_URL : DEV_URL,
            withCredentials: true,
        });

        this.client.interceptors.request.use((config: AxiosRequestConfig) => {
            const token = localStorage.getItem('authorization');
            if (token) {
                if (config && config.headers) {
                    config.headers.Authorization = `${token}`;
                }
            }
            return config;
        });
    }

    static getClient() {
        return this.client;
    }

    static toApiError(error: any) {
        console.error(error);
        let payload: ApiErrorModel;
        if (error && error.response && error.response.data) {
            payload = error.response.data;
        } else {
            payload = {
                status: 500,
                messages: [
                    {
                        message: 'Um erro inesperado ocorreu.',
                    },
                ],
            };
        }
        return payload;
    }
}

export default HttpService;
