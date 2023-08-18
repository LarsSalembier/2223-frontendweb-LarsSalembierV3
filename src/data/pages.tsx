import Page, { PageLocationInNavigation } from '../typings/page';

const PAGES: Page[] = [
  {
    name: 'Home',
    path: '/',
    locationInNavigation: PageLocationInNavigation.BRAND,
  },
  {
    name: 'Info',
    path: '/info',
    locationInNavigation: PageLocationInNavigation.MAIN,
  },
  {
    name: 'Kalender',
    path: '/kalender',
    locationInNavigation: PageLocationInNavigation.MAIN,
  },
  {
    name: 'Afdelingen',
    path: '/afdelingen',
    locationInNavigation: PageLocationInNavigation.MAIN,
  },
  {
    name: 'Kamp',
    path: '/kamp',
    locationInNavigation: PageLocationInNavigation.MAIN,
  },
  {
    name: 'Inschrijven',
    path: '/inschrijven',
    locationInNavigation: PageLocationInNavigation.MAIN,
  },
  {
    name: 'Contact',
    path: '/contact',
    locationInNavigation: PageLocationInNavigation.MAIN,
  },
  {
    name: 'Verhuur',
    path: '/verhuur',
    locationInNavigation: PageLocationInNavigation.EXTRA,
  },
  {
    name: 'Uniform',
    path: '/uniform',
    locationInNavigation: PageLocationInNavigation.EXTRA,
  },
  {
    name: 'Privacy',
    path: '/privacy',
    locationInNavigation: PageLocationInNavigation.EXTRA,
  },
  {
    name: 'Login',
    path: '/login',
    locationInNavigation: PageLocationInNavigation.NOWHERE,
  },
];

export default PAGES;
