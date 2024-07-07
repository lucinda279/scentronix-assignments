import { useMemo, useState } from 'react';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Grow,
  IconButton,
  Popper,
  PopperPlacementType,
  Stack,
  styled,
  useTheme,
} from '@mui/material';

import { ActionMenuPopperPlacement, ActionMenuProps } from './ActionMenu.types';
import ActionMenuItem from './ActionMenuItem';

const ToggleMenuButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'alignment',
})<{ alignment?: ActionMenuPopperPlacement }>(({ theme, alignment }) => ({
  backgroundColor: theme.palette.common.white,
  width: theme.spacing(5),
  boxShadow: theme.shadows[2],
  position: 'absolute',
  zIndex: theme.zIndex.modal + 1,
  ...(alignment === 'left' && {
    right: 0,
  }),
  ...(alignment === 'right' && {
    left: 0,
  }),
  '&:hover': {
    backgroundColor: theme.palette.common.white,
  },
}));

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 1,
}));

const TRANSITION_TIMEOUT = 300;

/**
 * This is the description of `ActionMenu` component
 *
 ```typescript
import ActionMenu from 'src/components/ActionMenu'
 ```
*/
const ActionMenu = (props: ActionMenuProps) => {
  const { title, Icon, items, placement, onClick, ...restProps } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [showItems, setShowItems] = useState(false);

  const theme = useTheme();

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setShowItems(true);
  };

  const handleCloseMenu = () => {
    setShowItems(false);
    setTimeout(() => {
      setAnchorEl(null);
    }, TRANSITION_TIMEOUT);
  };

  const itemPopperAlignment: { placement: PopperPlacementType; offset: [number, number] } =
    useMemo(() => {
      const offsetTop = parseInt(theme.spacing(2), 10);
      const offsetLeft =
        (anchorEl?.offsetWidth || 0) - (offsetTop + parseInt(theme.spacing(5), 10));

      switch (placement) {
        case ActionMenuPopperPlacement.Left:
          return {
            placement: 'left-end',
            offset: [0, -offsetLeft],
          };
        case ActionMenuPopperPlacement.Right:
          return {
            placement: 'right-end',
            offset: [0, -offsetLeft],
          };
        default:
          return {
            placement: 'bottom-end',
            offset: [0, offsetTop],
          };
      }
    }, [anchorEl, placement]);

  return (
    <>
      <Box position="relative" display="inline-block">
        <Fade in={open}>
          <ToggleMenuButton alignment={placement} onClick={handleCloseMenu}>
            <CloseOutlinedIcon />
          </ToggleMenuButton>
        </Fade>
        <Fade in={!open} onClick={handleOpenMenu}>
          <Button startIcon={<Icon fontSize="small" />} {...restProps}>
            {title}
          </Button>
        </Fade>
      </Box>

      <Backdrop
        open={open}
        sx={(theme) => ({ zIndex: theme.zIndex.modal })}
        onClick={handleCloseMenu}
      >
        <StyledPopper
          transition
          open={showItems}
          anchorEl={anchorEl}
          placement={itemPopperAlignment.placement}
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: itemPopperAlignment.offset,
              },
            },
          ]}
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              timeout={{ enter: TRANSITION_TIMEOUT, exit: TRANSITION_TIMEOUT }}
            >
              <Stack gap={1}>
                {items.map((x, i) => (
                  <ActionMenuItem key={`${x.title}-${i}`} {...x} onClick={() => onClick?.(x)} />
                ))}
              </Stack>
            </Grow>
          )}
        </StyledPopper>
      </Backdrop>
    </>
  );
};

export default ActionMenu;
