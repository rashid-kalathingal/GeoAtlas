import { http } from './http';

export const getCountries = async (region = 'all') => {
  const path = region === 'all' ? '/all' : `/region/${region}`;
  const url = `${path}?fields=name,region,flag`;
  const { data } = await http.get(url);
  return data;
};
