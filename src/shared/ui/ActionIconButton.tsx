import { IconButton, Tooltip } from '@mui/material';
import { memo, type ReactNode } from 'react';

interface ActionIconButtonProps {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  tooltip?: string;
  size?: 'small' | 'medium' | 'large';
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'default'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
}

export const ActionIconButton = memo(
  ({
    children,
    onClick,
    loading = false,
    disabled = false,
    tooltip,
    size = 'medium',
    color = 'default',
  }: ActionIconButtonProps) => {
    const button = (
      <IconButton
        onClick={onClick}
        disabled={disabled || loading}
        loading={loading}
        size={size}
        color={color}
        aria-label={tooltip}
      >
        {children}
      </IconButton>
    );

    return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
  },
);
