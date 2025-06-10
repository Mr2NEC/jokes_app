import { useGetTenJokesQuery } from '@/entities/jokes';

export const HomePage = () => {
  const { data, error, isLoading } = useGetTenJokesQuery();
  console.log(data, error, isLoading);

  return <h1>HomePage</h1>;
};
