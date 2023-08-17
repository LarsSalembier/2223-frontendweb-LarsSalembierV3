import { Auth0Provider } from '@auth0/auth0-react';

type MyAuth0ProviderProps = {
  children: React.ReactNode;
};

function MyAuth0Provider({ children }: MyAuth0ProviderProps) {
  const domain: string = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
  const audience: string = import.meta.env.VITE_REACT_APP_AUTH0_AUDIENCE;
  const clientId: string = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

  if (!domain) {
    throw new Error('VITE_REACT_APP_AUTH0_DOMAIN is not set');
  }

  if (!audience) {
    throw new Error('VITE_REACT_APP_AUTH0_AUDIENCE is not set');
  }

  if (!clientId) {
    throw new Error('VITE_REACT_APP_AUTH0_CLIENT_ID is not set');
  }

  console.log(window.location.origin);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: audience,
      }}
      cacheLocation="localstorage"
      useRefreshTokens
    >
      {children}
    </Auth0Provider>
  );
}

export default MyAuth0Provider;
