import { useQuery } from '@tanstack/react-query';
import { getCountries } from '../services/countryApi';

export const useCountries = (region) =>
  useQuery({
    queryKey: ['countries', region],
    queryFn: () => getCountries(region),
    keepPreviousData: true,
  });
