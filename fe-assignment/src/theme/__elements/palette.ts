import { PaletteOptions } from '@mui/material';

import * as colors from './colors';

const palette: PaletteOptions = {
  primary: {
    main: colors.primary,
  },
  secondary: {
    main: colors.secondary,
  },
  neutral: {
    main: colors.neutral,
    [900]: colors.n900,
    [800]: colors.n800,
    [700]: colors.n700,
    [600]: colors.n600,
    [400]: colors.n400,
    [300]: colors.n300,
    [200]: colors.n200,
    [100]: colors.n100,
    [50]: colors.n50,
  },
  text: {
    primary: colors.primary,
    secondary: colors.n400,
  },
};

export default palette;
