import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';
import Afdelingen from '../routes/Afdelingen';
import Page from '../typings/page';
import Contact from '../routes/Contact';
import Home from '../routes/Home';
import Info from '../routes/Info';
import Inschrijven from '../routes/Inschrijven';
import Kalender from '../routes/Kalender';
import Kamp from '../routes/Kamp';
import Privacy from '../routes/Privacy';
import Uniform from '../routes/Uniform';
import Verhuur from '../routes/Verhuur';
import PAGES from '../data/pages';

function getElementFromPage(page: Page): React.ReactNode {
  switch (page.name) {
    case 'Afdelingen':
      return <Afdelingen />;
    case 'Contact':
      return <Contact />;
    case 'Home':
      return <Home />;
    case 'Info':
      return <Info />;
    case 'Inschrijven':
      return <Inschrijven />;
    case 'Kalender':
      return <Kalender />;
    case 'Kamp':
      return <Kamp />;
    case 'Privacy':
      return <Privacy />;
    case 'Uniform':
      return <Uniform />;
    case 'Verhuur':
      return <Verhuur />;
    default:
      throw new Error(`Unknown page: ${page.name}`);
  }
}

const ROUTER_ITEMS: RouteObject[] = PAGES.map((page: Page) => ({
  path: page.path,
  element: getElementFromPage(page),
}));

const router = createBrowserRouter(ROUTER_ITEMS);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
