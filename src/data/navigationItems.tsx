import NavigationItem from '../typings/navigationItem';
import PAGES from './pages';

const NAVIGATION_ITEMS: NavigationItem[] = PAGES.map((page) =>
  NavigationItem.fromPage(page)
);

export default NAVIGATION_ITEMS;
