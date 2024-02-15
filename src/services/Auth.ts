import fetchHandler from './FetchHandler';

export const getUserAPI = (id: string) => {
    return fetchHandler({
        method: 'get',
        url: `api/v1/users/${id}`,
    });
};

export const loginAPI = (idToken: string) => {
    return fetchHandler({
        method: 'post',
        url: 'users/signin',
        data: {
            idToken,
        },
    });
};