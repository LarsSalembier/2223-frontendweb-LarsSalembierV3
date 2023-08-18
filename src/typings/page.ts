export enum PageLocationInNavigation {
  MAIN = 'main',
  EXTRA = 'extra',
  BRAND = 'brand',
  NOWHERE = 'nowhere',
}

type Page = {
  name: string;
  path: string;
  locationInNavigation: PageLocationInNavigation;
};

export default Page;
