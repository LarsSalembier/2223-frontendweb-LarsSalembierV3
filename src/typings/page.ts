export enum PageLocationInNavigation {
  MAIN = 'main',
  EXTRA = 'extra',
  BRAND = 'brand',
}

class Page {
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
}

export default Page;
