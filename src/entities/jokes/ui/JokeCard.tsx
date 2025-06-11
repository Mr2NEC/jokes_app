import { Card, CardContent, Typography, Box } from '@mui/material';
import { memo } from 'react';

import { useHover } from '@/shared/hooks';
import type { WithChildren } from '@/shared/types';

import { JokeCardActions, type JokeCardActionsProps } from './JokeCardActions';
import type { IJoke } from '../model/jokes.types';

interface JokeCardProps extends IJoke, JokeCardActionsProps {}

interface JokeSectionProps {
  title: string;
  content: string;
}

const JokeSection = memo(({ title, content }: JokeSectionProps) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="body1" fontWeight={600}>
      {title}
    </Typography>
    <Typography color={'rgba(255, 255, 255, 0.7)'} variant="body1" gutterBottom>
      {content}
    </Typography>
  </Box>
));

const HeaderTypography = memo(({ children }: WithChildren) => (
  <Typography textTransform="capitalize" variant="body1" color="primary" fontWeight={600}>
    {children}
  </Typography>
));

export const JokeCard = memo(
  ({
    id,
    type,
    setup,
    punchline,
    onAdd,
    onRemove,
    onRefresh,
    isAdded,
    isRefreshing,
  }: JokeCardProps) => {
    const { ref, isHovered } = useHover<HTMLDivElement>();
    return (
      <Card
        ref={ref}
        sx={{
          maxWidth: 345,
          position: 'relative',
          height: '100%',
          bgcolor: '#666',
          borderRadius: 3,
          overflow: 'hidden',
          mb: 3,
        }}
      >
        <CardContent sx={{ p: 3, color: '#fff' }}>
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Box display="flex" gap={1}>
              <Typography fontWeight={600}>Type:</Typography>
              <HeaderTypography>{type}</HeaderTypography>
            </Box>

            <HeaderTypography>ID #{id}</HeaderTypography>
          </Box>

          <JokeSection title="Setup:" content={setup} />
          <JokeSection title="Punchline:" content={punchline} />
        </CardContent>

        {isHovered && (
          <JokeCardActions
            isAdded={isAdded}
            isRefreshing={isRefreshing}
            onAdd={onAdd}
            onRemove={onRemove}
            onRefresh={onRefresh}
          />
        )}
      </Card>
    );
  },
);
