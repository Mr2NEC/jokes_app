import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '../stores';

interface Props {
  children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => <Provider store={store}>{children}</Provider>;
