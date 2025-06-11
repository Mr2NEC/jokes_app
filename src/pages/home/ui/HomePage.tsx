import { Container } from '@mui/material';

import { JokesList } from '@/widgets/jokes-list';

export const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <JokesList />
    </Container>
  );
};
