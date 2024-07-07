import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

export const fontFamily = 'Inter';

export const typographyComponentSettings: {
  defaultProps?: ComponentsProps['MuiTypography'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
  variants?: ComponentsVariants['MuiTypography'];
} = {
  defaultProps: {
    variant: 'body2',
  },
};

export const typographySettings = {
  fontFamily,
  fontWeightRegular: 400,
  fontWeightBold: 600,
  fontWeightMedium: 500,
  fontWeightLight: 300,
};
