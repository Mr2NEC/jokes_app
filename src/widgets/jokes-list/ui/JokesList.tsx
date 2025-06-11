import { Grid } from '@mui/material';

import { JokeCard } from '@/entities/jokes';
import { LoadMoreButton } from '@/shared/ui/LoadMoreButton';

import { useJokesList } from '../hooks/useJokesList';

export const JokesList = () => {
  const { items, loadMore, isLoading, hasMore } = useJokesList();
  return (
    <Grid container spacing={2} padding={2}>
      {items?.map((joke) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={joke.id}>
          <JokeCard {...joke} />
        </Grid>
      ))}
      <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <LoadMoreButton onClick={loadMore} loading={isLoading} disabled={hasMore} />
      </Grid>
    </Grid>
  );
};
