import Page, { PageLocationInNavigation } from './page';

class NavigationItem {
  name: string;

  path: string;

  locationInNavigation: PageLocationInNavigation;

  constructor(
    name: string,
    path: string,
    locationInNavigation: PageLocationInNavigation
  ) {
    this.name = name;
    this.path = path;
    this.locationInNavigation = locationInNavigation;
  }

  static fromPage(page: Page): NavigationItem {
    return new NavigationItem(page.name, page.path, page.locationInNavigation);
  }

  isMainNavigationItem(): boolean {
    return this.locationInNavigation === PageLocationInNavigation.MAIN;
  }

  isExtraNavigationItem(): boolean {
    return this.locationInNavigation === PageLocationInNavigation.EXTRA;
  }
}

export default NavigationItem;
