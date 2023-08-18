import AuthenticationButton from './auth/AuthenticationButton';

function Footer() {
  return (
    <footer className="relative flex bg-gray-900 p-4">
      <p className="absolute inset-0 flex items-center justify-center text-white">
        © Chiro Houthulst 2023
      </p>
      <div className="m-2 flex flex-1 justify-end">
        <AuthenticationButton />
      </div>
    </footer>
  );
}

export default Footer;
