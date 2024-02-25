import fetchHandler from './FetchHandler';

export const getUserAPI = (id: string) => {
  return fetchHandler({
    method: 'get',
    url: `users/${id}`,
  });
};

export const loginAPI = (idToken: string) => {
  console.log('==============idToken======================');
  console.log(idToken);
  console.log('====================================');
  return fetchHandler({
    method: 'post',
    url: 'users/signin',
    data: {
      idToken,
    },
  });
};
