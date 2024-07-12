import { AxiosRequestConfig } from 'axios';
import { Http } from './base.api';

class CheckAPI extends Http {
  Ping(params: string, config?: AxiosRequestConfig) {
    return this.GET(`${params}`, config);
  }
}

export const checkAPI = new CheckAPI('actuator/health');
