import { useAuth0 } from '@auth0/auth0-react';
import { Button, ButtonProps } from '@nextui-org/react';

function LogoutButton(buttonProps: ButtonProps) {
  const { logout } = useAuth0();

  return (
    <Button
      onClick={() =>
        logout({
          logoutParams: { returnTo: window.location.origin },
        })
      }
      color="primary"
      {...buttonProps}
    >
      Uitloggen
    </Button>
  );
}

export default LogoutButton;
