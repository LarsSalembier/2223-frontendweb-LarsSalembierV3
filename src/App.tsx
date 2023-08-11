import Navigation from './components/Navigation';

const LOGO_DATA = {
  light_src: '/light/apple-touch-icon.png',
  dark_src: '/dark/apple-touch-icon.png',
  width: 40,
  height: 40,
  alt: 'Logo Chiro Houthulst',
};

const BRAND_NAME = 'Chiro Houthulst';

const MENU_ITEMS = [
  'Info',
  'Kalender',
  'Afdelingen',
  'Kamp',
  'Inschrijven',
  'Contact',
];

const EXTRA_ITEMS = ['Verhuur', 'Uniform', 'Privacy'];

function App() {
  return (
    <Navigation
      logoData={LOGO_DATA}
      brandName={BRAND_NAME}
      menuItems={MENU_ITEMS}
      extraItems={EXTRA_ITEMS}
    />
  );
}

export default App;
