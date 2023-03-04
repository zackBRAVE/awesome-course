import axios, { AxiosError, AxiosRequestHeaders, AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:3000';

const instance = axios.create({ baseURL: BASE_URL });

function updateHeaders(origHeaders: AxiosRequestHeaders) {
  // origHeaders['Authorization'] = `Bearer ${localStorage.getItem(
  //   'access_token'
  // )}`;
  return origHeaders;
}

(function addRequestInterceptor() {
  instance.interceptors.request.use((config) => {
    config.headers = updateHeaders(config.headers);
    return config;
  });
})();

(function addResponseInterceptor() {
  instance.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      console.log('response interceptor:', response);
      return response;
    },
    (error) => {
      console.error('error interceptor:', error);
      return error;
    }
  );
})();

async function get<T>(url: string) {
  try {
    const res = await instance.get<T>(url);

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message;
    } else {
      return 'Unexpected error';
    }
  }
}

async function post<T>(url: string, body: Record<string, any>) {
  const res = await instance.post<T>(url, body);

  return res.data;
}

export function useRequest() {
  return { get, post };
}
