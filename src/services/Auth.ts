import fetchHandler from './FetchHandler';

export const getUserAPI = (id: string) => {
  return fetchHandler({
    method: 'get',
    url: `users/${id}`,
  });
};

export const getOtpAPI = (phone: string) => {
  return fetchHandler({
    method: 'post',
    url: `users/otp`,
    data: {
      phone: "91" + phone,
    },
  });
};

export const verifyOtpAPI = (phone: string, orderId: string, otp:  string) => {
  return fetchHandler({
    method: 'post',
    url: `users/verify-otp`,
    data: {
      phone: "91" + phone,
      orderId,
      otp

    },
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
