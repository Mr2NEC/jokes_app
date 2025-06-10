import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import type { ReactNode } from 'react';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
