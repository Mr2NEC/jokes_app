import { Box, Button } from '@mui/material';
import { memo } from 'react';

export interface JokeCardActionsProps {
  isAdded: boolean;
  isRefreshing: boolean;
  onAdd: () => void;
  onRemove: () => void;
  onRefresh: () => void;
}

export const JokeCardActions = memo(
  ({ onAdd, onRemove, onRefresh, isAdded, isRefreshing }: JokeCardActionsProps) => {
    return (
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 1,
          position: 'absolute',
          bottom: 5,
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
        }}
      >
        <Button size="small" color="inherit" variant="outlined" onClick={onAdd} disabled={isAdded}>
          Add
        </Button>
        <Button
          size="small"
          color="inherit"
          variant="outlined"
          onClick={onRemove}
          disabled={!isAdded}
        >
          Remove
        </Button>
        <Button
          size="small"
          color="inherit"
          variant="outlined"
          onClick={onRefresh}
          disabled={isRefreshing}
        >
          Refresh
        </Button>
      </Box>
    );
  },
);
