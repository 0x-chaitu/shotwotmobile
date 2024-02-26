import fetchHandler from './FetchHandler';

export const getBriefsAPI = () => {
  return fetchHandler({
    method: 'get',
    url: 'user/briefs/list',
  });
};

export const getAppliedBriefsAPI = () => {
  return fetchHandler({
    method: 'get',
    url: 'user/briefs/list/applied',
  });
};

export const applyBriefAPI = (data: any) => {
  return fetchHandler({
    method: 'post',
    url: 'user/briefs/apply',
    data,
  });
};
