import { TabPanelClassKey, TabPanelProps } from '@mui/lab/TabPanel';
import { ComponentsOverrides, ComponentsProps, ComponentsVariants } from '@mui/material/styles';

export {};

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    900: string;
    800: string;
    700: string;
    600: string;
    400: string;
    300: string;
    200: string;
    100: string;
    50: string;
  }

  interface PaletteOptions {
    neutral?: Partial<PaletteColor>;
  }

  interface Palette {
    neutral?: Partial<PaletteColor>;
  }
}
