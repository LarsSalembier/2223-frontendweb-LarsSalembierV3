import { ReactNode } from 'react';
import { BRAND_NAME, LOGO_DATA } from '../data/miscData';
import Navigation from './Navigation';
import NAVIGATION_ITEMS from '../data/navigationItems';

type PageContainerProps = {
  children: ReactNode;
};

function PageContainer({ children }: PageContainerProps) {
  return (
    <>
      <Navigation
        logoData={LOGO_DATA}
        brandName={BRAND_NAME}
        items={NAVIGATION_ITEMS}
      />
      {children}
    </>
  );
}

export default PageContainer;
