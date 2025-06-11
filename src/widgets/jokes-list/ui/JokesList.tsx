import { Grid } from '@mui/material';

import { JokeCard } from '@/entities/jokes';
import { LoadMoreButton } from '@/shared/ui';

import { useJokesList } from '../hooks/useJokesList';

export const JokesList = () => {
  const { items, loadMore, isLoading, hasMore, add, remove, replace, isAdded, isRefreshing } =
    useJokesList();
  return (
    <Grid container spacing={2} paddingY={3}>
      {items?.map((joke) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={joke.id}>
          <JokeCard
            {...joke}
            onAdd={() => add(joke)}
            onRemove={() => remove(joke.id)}
            onRefresh={() => replace(joke.id)}
            isAdded={isAdded(joke.id)}
            isRefreshing={isRefreshing(joke.id)}
          />
        </Grid>
      ))}
      <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <LoadMoreButton onClick={loadMore} loading={isLoading} disabled={hasMore} />
      </Grid>
    </Grid>
  );
};
