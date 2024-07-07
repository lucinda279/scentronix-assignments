import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

const config: {
  defaultProps?: ComponentsProps['MuiTooltip'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTooltip'];
  variants?: ComponentsVariants['MuiTooltip'];
} = {
  styleOverrides: {
    arrow: (props) => ({
      color: props.theme.palette.neutral?.[900],
    }),
    tooltip: (props) => ({
      backgroundColor: props.theme.palette.neutral?.[900],
      padding: props.theme.spacing(1),
    }),
  },
};

export default config;
