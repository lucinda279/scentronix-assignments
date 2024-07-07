import { FC } from 'react';

import { Stack, Typography, styled } from '@mui/material';

import { ShortenText } from '../shorten-text';
import { ActionMenuItemProps } from './ActionMenu.types';

const Container = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(2, 3),
  borderRadius: 4,
  boxShadow: theme.shadows[2],
  minWidth: 280,
  maxWidth: 360,
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5, 3),
    minWidth: 240,
    maxWidth: 280,
  },
  '&:hover': {
    backgroundColor: theme.palette.neutral?.[50],
  },
}));

/**
 * This is the description of `ActionMenuItem` component
 *
 ```typescript
import ActionMenuItem from 'src/components/ActionMenuItem'
 ```
*/
const ActionMenuItem: FC<ActionMenuItemProps> = (props: ActionMenuItemProps) => {
  const { title, Icon, subtitle, description, tags, onClick } = props;

  return (
    <Container onClick={onClick}>
      <Stack direction="row" gap={1} alignItems="center">
        <Icon fontSize="small" />
        <ShortenText flexGrow={1} variant="body1" fontWeight={600}>
          {title}
        </ShortenText>
        {subtitle && (
          <Typography variant="body1" ml="auto" fontWeight={600}>
            {subtitle}
          </Typography>
        )}
      </Stack>
      {description && (
        <Typography color="text.secondary" mt={1}>
          {description}
        </Typography>
      )}
      {tags && tags.length > 0 && (
        <Stack direction="row" mt={2} gap={1} alignItems="center">
          {tags.map((x) => (
            <Typography key={x} px={1} py={0.5} borderRadius={1} bgcolor="secondary.main">
              {x}
            </Typography>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default ActionMenuItem;
