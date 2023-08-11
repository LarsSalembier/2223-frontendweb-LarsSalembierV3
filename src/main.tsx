import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import Router from './routing/Router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="bg-background text-foreground dark">
        <Router />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
