import type { ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from '../stores';

interface Props {
  children: ReactNode;
}

export const PersistProvider = ({ children }: Props) => (
  <PersistGate loading={null} persistor={persistor}>
    {children}
  </PersistGate>
);
