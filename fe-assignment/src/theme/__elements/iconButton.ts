import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const config: {
  defaultProps?: ComponentsProps['MuiIconButton'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiIconButton'];
  variants?: ComponentsVariants['MuiIconButton'];
} = {
  defaultProps: {
    color: 'default',
  },
};

export default config;
