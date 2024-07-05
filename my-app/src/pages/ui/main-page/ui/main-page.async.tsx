import { lazy } from 'react';

// TODO: Временно искусственная задержка для демонстрации
export const MainPageAsync = lazy(
  () => new Promise((resolve) => {
    setTimeout(() => resolve(import('./main-page')), 1000);
  }),
);