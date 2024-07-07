import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const config: {
  defaultProps?: ComponentsProps['MuiButton'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
  variants?: ComponentsVariants['MuiButton'];
} = {
  defaultProps: {
    variant: 'contained',
    color: 'primary',
  },
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
  },
};

export default config;
