import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '@nextui-org/react';

type RequireAuthProps = {
  children: React.ReactNode;
};

function RequireAuth({ children }: RequireAuthProps) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

  if (isAuthenticated) {
    return children;
  }

  return <></>;
}

export default RequireAuth;
