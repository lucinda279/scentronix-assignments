import { createTheme } from '@mui/material/styles';

import buttonComponentSettings from './__elements/button';
import cssBaseLine from './__elements/cssBaseLine';
import iconButtonComponentSettings from './__elements/iconButton';
import palette from './__elements/palette';
import shadows from './__elements/shadows';
import tooltipComponentSettings from './__elements/tooltip';
import { typographyComponentSettings, typographySettings } from './__elements/typography';

const theme = createTheme({
  palette,
  shadows,
  typography: typographySettings,
  components: {
    MuiCssBaseline: cssBaseLine,
    MuiButton: buttonComponentSettings,
    MuiIconButton: iconButtonComponentSettings,
    MuiTooltip: tooltipComponentSettings,
    MuiTypography: typographyComponentSettings,
  },
});

export default theme;
