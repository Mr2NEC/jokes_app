import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/app/App';
import { withProviders } from '@/app/providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>{withProviders({ children: <App /> })}</StrictMode>,
);
