import { Navigate } from 'react-router-dom';
import LoginButton from '../components/auth/LoginButton';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Spinner,
} from '@nextui-org/react';
import { useAuth0 } from '@auth0/auth0-react';

function AuthLanding() {
  const { error, isAuthenticated, isLoading } = useAuth0();

  if (error) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Card className="max-w-screen-sm">
          <CardHeader>
            <p className="m-4">
              Inloggen is mislukt, misschien is de foutboodschap hieronder
              nuttig.
            </p>
          </CardHeader>
          <Divider />
          <CardBody>
            <Card className="m-2 bg-danger-100">
              <CardHeader>{error.name}</CardHeader>
              <Divider />
              <CardBody>{error.message}</CardBody>
            </Card>
          </CardBody>
          <CardFooter className="m-4">
            <LoginButton size="lg" />
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (!isLoading && isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (!isLoading && !isAuthenticated) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Card className="max-w-screen-sm">
          <CardHeader>
            <p className="m-4">
              Om toegang te krijgen tot deze pagina moet je inloggen.
            </p>
          </CardHeader>
          <CardBody>
            <LoginButton />
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="max-w-screen-sm">
        <CardHeader>
          <p className="m-4">Aan het inloggen...</p>
        </CardHeader>
        <CardBody>
          <Spinner />
        </CardBody>
      </Card>
    </div>
  );
}

export default AuthLanding;
