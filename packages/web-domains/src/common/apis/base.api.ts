import axios from 'axios';

const baseURL = process.env.STAGE === 'production' ? 'https://api.moring.one' : `https://dev-api.moring.one`;

const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export class Http {
  static async GET<Response = unknown>(...args: Parameters<typeof axiosInstance.get>) {
    const response = await axiosInstance.get<Response>(...args);
    return response.data;
  }

  static async POST<Request = unknown, Response = unknown>(...args: Parameters<typeof axiosInstance.post>) {
    const response = await axiosInstance.post<Request, Response>(...args);
    return response;
  }

  static async PUT<Request = unknown, Response = unknown>(...args: Parameters<typeof axiosInstance.put>) {
    const response = await axiosInstance.put<Request, Response>(...args);
    return response;
  }

  static async DELETE<Response = unknown>(...args: Parameters<typeof axiosInstance.delete>) {
    const response = await axiosInstance.delete<Response>(...args);
    return response.data;
  }
}
