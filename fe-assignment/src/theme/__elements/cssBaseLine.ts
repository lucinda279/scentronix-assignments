import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const config: {
  defaultProps?: ComponentsProps['MuiCssBaseline'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiCssBaseline'];
  variants?: ComponentsVariants['MuiCssBaseline'];
} = {
  styleOverrides: {
    body: {
      fontSize: 14,
    },
  },
};

export default config;
