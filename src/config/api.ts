import axios, {AxiosError} from "axios";

export const API = axios.create();

export const isAxiosError = (error: any): error is AxiosError => {
    return error?.isAxiosError;
}