import { Button, CircularProgress } from '@mui/material';
import { memo } from 'react';

interface LoadMoreButtonProps {
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export const LoadMoreButton = memo(
  ({ onClick, loading = false, disabled = false }: LoadMoreButtonProps) => {
    return (
      <Button
        sx={{ minWidth: '150px' }}
        onClick={onClick}
        disabled={disabled || !!loading}
        variant="outlined"
        type="button"
      >
        {loading ? <CircularProgress size={20} /> : 'Load More'}
      </Button>
    );
  },
);
