import { useAuth0 } from '@auth0/auth0-react';
import { Button, ButtonProps } from '@nextui-org/react';
import { useCallback } from 'react';

function LoginButton(buttonProps: ButtonProps) {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = useCallback(async () => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  return (
    <Button onClick={handleLogin} color="primary" {...buttonProps}>
      Inloggen
    </Button>
  );
}

export default LoginButton;
