import {
  LOCAL_STORAGE_KEYS,
  emptyAsyncStorage,
  getItemFromAsyncStorage,
  setItemInAsyncStorage,
} from '../hooks/useStorage';
import axios, {AxiosError, AxiosResponse} from 'axios';
//   import {getAccessTokenAPI} from './Auth';
//   import {customNavigation} from '../../App';
import {store} from '../store';
import {API_CONFIG} from './constants';

interface FetchHandlerProps {
  method: 'get' | 'patch' | 'post' | 'delete';
  data?: object;
  header?: object;
  url: string;
}

// Interceptor for axios response handling.
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError<{code: number; message: string}>) => {
    console.error('Response Error:', error.message);
    if (error.response) {
      console.error('Response Data:', error.response.data);
    }
    if (error.code === 'ERR_NETWORK') {
      console.error('Network Error');
      // Handle network error if needed
    }
    // Add other error handling logic as needed
    throw error; // Re-throw error to propagate it further
  },
);

export default async function fetchHandler({
  url,
  method,
  data = {},
  header = {},
}: FetchHandlerProps) {
  try {
    const URL = `${API_CONFIG.bhavinLocalHost}/${url}`;
    console.log('API REQUEST TO -> ', URL);
    const headers = {
      Authorization: `Bearer ${getItemFromAsyncStorage(
        LOCAL_STORAGE_KEYS.accessToken,
      )}`,
    };

    if (method === 'get') {
      return await axios({
        url: URL,
        method: 'get',
        headers: {
          ...headers,
          ...header,
        },
      });
    }

    return await axios({
      url: URL,
      method: method,
      headers: {
        ...headers,
        ...header,
      },
      data,
    });
  } catch (error) {
    console.error('Fetch Handler Error:', error);
    throw error; // Re-throw error to propagate it further
  }
}
