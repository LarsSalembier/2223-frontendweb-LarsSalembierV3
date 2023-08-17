import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function AuthenticationButton() {
  const { isAuthenticated } = useAuth0(); // 👈 1

  if (isAuthenticated) {
    return <LogoutButton />;
  }

  return <LoginButton />;
}

export default AuthenticationButton;
