import axios, { AxiosRequestConfig } from 'axios';
const baseURL = `/api`;

export class Http {
  private instance: axios.AxiosInstance;
  constructor(path: string) {
    path = path.startsWith('/') ? path.slice(1) : path;

    this.instance = axios.create({
      baseURL: `${baseURL}/${path}`,
    });
  }

  protected async GET<Response = unknown>(url: string, config?: AxiosRequestConfig) {
    const response = await this.instance.get<Response>(url, config);
    return response.data;
  }

  protected async POST<Request = unknown, Response = unknown>(
    url: string,
    payload?: Request,
    config?: AxiosRequestConfig,
  ) {
    const response = await this.instance.post<Request, Response>(url, payload, config);
    return response;
  }

  protected async PUT<Request = unknown, Response = unknown>(
    url: string,
    payload?: Request,
    config?: AxiosRequestConfig,
  ) {
    const response = await this.instance.put<Request, Response>(url, payload, config);
    return response;
  }

  protected async DELETE<Response = unknown>(url: string, config?: AxiosRequestConfig) {
    const response = await this.instance.delete<Response>(url, config);
    return response.data;
  }
}
