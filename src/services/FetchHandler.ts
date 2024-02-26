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
    async (
        error: AxiosError<{
            code: number;
            message: string;
        }>,
    ) => {
        console.log(error);
        
        if (error.code === 'ERR_NETWORK') {

        }

        if (error.response) {
            const url = error.response.config.url;
            if (error.response.data?.code && error.response.data?.code === 500) {
                return;
            }

            // If we get 401 error in any api that means token is expired.
            // So we make request to get access token.
            if (
                error.response.data?.code &&
                error.response.data?.code === 401 &&
                !url?.includes('/refresh-tokens')
            ) {
                // getAccessTokenAPI(
                //     getItemFromAsyncStorage(LOCAL_STORAGE_KEYS.refreshToken),
                // )
                //     .then((res: any) => {
                //         if (res) {
                //             setItemInAsyncStorage(
                //                 LOCAL_STORAGE_KEYS.accessToken,
                //                 res.access.token,
                //             );
                //             setItemInAsyncStorage(
                //                 LOCAL_STORAGE_KEYS.refreshToken,
                //                 res.refresh.token,
                //             );
                //         } else {
                //             // customNavigation(AUTH_SCREEN_NAMES.LOGIN);
                //             emptyAsyncStorage();
                //         }
                //     })
                //     .catch(() => {
                //         // customNavigation(AUTH_SCREEN_NAMES.LOGIN);
                //         emptyAsyncStorage();
                //     });
                emptyAsyncStorage();
                return;
            }
        }
    },
);

export default async function fetchHandler({
  url,
  method,
  data = {},
  header = {},
}: FetchHandlerProps) {
  try {
    const URL = `${API_CONFIG.devEndPoint}/${url}`;
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
