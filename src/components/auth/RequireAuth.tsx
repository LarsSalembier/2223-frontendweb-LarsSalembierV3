import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '@nextui-org/react';
import { Navigate } from 'react-router-dom';

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

  return <Navigate to="/" />;
}

export default RequireAuth;
