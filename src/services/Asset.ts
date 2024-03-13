import fetchHandler from './FetchHandler';

export const createAssetsAPI = (data: any) => {
  return fetchHandler({
    method: 'post',
    url: 'user/assets/create',
    data
  });
};


