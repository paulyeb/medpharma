import * as axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const baseUrl = 'http://172.20.10.2:3000';

export const _get = <ResponseT = any>(
  route: string,
  config?: axios.AxiosRequestConfig<any>,
  params?: any,
): Promise<ResponseT> => {
  return new Promise((resolve, reject) => {
    axios.default
      .get(baseUrl + route, { ...(config || {}), params })
      .then((response) => resolve(response?.data || null))
      .catch((error) => {
        if (error.response) {
          reject(error.response?.data);
        }
        reject({
          message: 'An unexpected error occured',
          code: 'CLI500',
        });
      });
  });
};

export const _post = <ResponseT = any>(
  route: string,
  option?: any,
  config?: axios.AxiosRequestConfig<any>,
): Promise<ResponseT> => {
  return new Promise((resolve, reject) => {
    axios.default
      .post(baseUrl + route, option, config)
      .then((response) => resolve(response?.data || null))
      .catch((error) => {
        if (error.response) {
          reject(error.response?.data);
        }
        reject({
          message: 'An unexpected error occured ' + error,
          code: 'CLI500',
        });
      });
  });
};

export { useQuery, useMutation, useQueryClient };
