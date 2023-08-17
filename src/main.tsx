import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import Router from './routing/Router';
import './index.css';
import MyAuth0Provider from './contexts/MyAuth0Provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyAuth0Provider>
      <NextUIProvider>
        <main className="bg-background text-foreground dark">
          <Router />
        </main>
      </NextUIProvider>
    </MyAuth0Provider>
  </React.StrictMode>
);
