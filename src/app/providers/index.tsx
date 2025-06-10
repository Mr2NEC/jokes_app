import type { ReactNode } from 'react';

import { CssBaseline } from './CssBaseline';
import { PersistProvider } from './PersistProvider';
import { StoreProvider } from './StoreProvider';
import { ThemeProvider } from './ThemeProvider';

interface Props {
  children: ReactNode;
}

export const withProviders = ({ children }: Props) => (
  <StoreProvider>
    <PersistProvider>
      <ThemeProvider>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </PersistProvider>
  </StoreProvider>
);
