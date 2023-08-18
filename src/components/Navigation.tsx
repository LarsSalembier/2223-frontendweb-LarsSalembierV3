import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  Link,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from '@nextui-org/react';
import { useState } from 'react';
import Page, { PageLocationInNavigation } from '../typings/page';

type NavigationProps = {
  logoData: {
    light_src: string;
    width: number;
    height: number;
    alt: string;
  };
  brandName: string;
  items: Page[];
};

function Navigation({ logoData, brandName, items }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainItems = items.filter(
    (item) => item.locationInNavigation === PageLocationInNavigation.MAIN
  );
  const extraItems = items.filter(
    (item) => item.locationInNavigation === PageLocationInNavigation.EXTRA
  );

  return (
    <Navbar
      onMenuOpenChange={(isOpen: boolean | undefined) =>
        setIsMenuOpen(isOpen ?? false)
      }
    >
      <NavbarContent justify="start" className="lg:gap-16">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
        <NavbarBrand>
          <Link color="foreground" href="/" className="gap-4">
            <Image
              src={logoData.light_src}
              width={logoData.width}
              height={logoData.height}
              alt={logoData.alt}
            />
            <p className="font-bold text-inherit">{brandName}</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-8 lg:gap-16">
        <div className="hidden gap-8 md:flex">
          {mainItems.map((item) => (
            <NavbarItem key={item.path}>
              <Link color="foreground" href={item.path}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>
      <NavbarMenu>
        {mainItems.map((item) => (
          <NavbarMenuItem key={item.path} className="md:hidden">
            <Link color="foreground" href={item.path} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        {extraItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <Link color="foreground" href={item.path} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Navigation;
