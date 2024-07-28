import axios from 'axios';

const baseURL = `https://dev-api.moring.one`;

const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzIyMTcyOTU2LCJleHAiOjE3MjIxOTA5NTZ9.mWTMRFM3jHM-gpbMx9zbJkJtMDuYJSICmjYzQR3JZfs',
  },
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
