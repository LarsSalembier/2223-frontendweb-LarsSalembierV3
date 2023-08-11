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

type NavigationProps = {
  logoData: {
    light_src: string;
    width: number;
    height: number;
    alt: string;
  };
  brandName: string;
  menuItems: string[];
  extraItems: string[];
};

function Navigation({
  logoData,
  brandName,
  menuItems,
  extraItems,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          {menuItems.map((item) => (
            <NavbarItem key={item}>
              <Link color="foreground" href="#">
                {item}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item} className="md:hidden">
            <Link color="foreground" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        {extraItems.map((item) => (
          <NavbarMenuItem key={item}>
            <Link color="foreground" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Navigation;
