import type { ReactNode } from 'react';

import { CssBaseline } from './CssBaseline';
import { StoreProvider } from './StoreProvider';
import { ThemeProvider } from './ThemeProvider';

interface Props {
  children: ReactNode;
}

export const withProviders = ({ children }: Props) => (
  <StoreProvider>
    <ThemeProvider>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StoreProvider>
);
