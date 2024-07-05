import { lazy } from 'react';

export const TestPageAsync = lazy(
  () => new Promise((resolve) => {
    setTimeout(() => resolve(import('./test-page')), 1000);
  }),
);