import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';
import MyAuth0Provider from './contexts/MyAuth0Provider';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyAuth0Provider>
      <NextUIProvider>
        <BrowserRouter>
          <main className="bg-background text-foreground dark">
            <App />
          </main>
        </BrowserRouter>
      </NextUIProvider>
    </MyAuth0Provider>
  </React.StrictMode>
);
