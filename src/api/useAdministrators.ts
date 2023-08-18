import axios from 'axios';
import Administrator from '../typings/api/Administrator';
import { useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const API_URL: string | undefined = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error('Missing VITE_API_URL environment variable');
}

const BASE_URL = `${API_URL}/administrators`;

const useAdministrators = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAll = useCallback(async (): Promise<Administrator[]> => {
    const token = await getAccessTokenSilently();

    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }, [getAccessTokenSilently]);

  const getById = useCallback(
    async (auth0id: string): Promise<Administrator> => {
      const token = await getAccessTokenSilently();

      const response = await axios.get(`${BASE_URL}/${auth0id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    [getAccessTokenSilently]
  );

  const save = useCallback(
    async (data: Partial<Administrator>): Promise<Administrator> => {
      const token = await getAccessTokenSilently();

      const { auth0id, ...values } = data;

      const response = await axios({
        method: auth0id ? 'put' : 'post',
        url: auth0id ? `${BASE_URL}/${auth0id}` : BASE_URL,
        data: values,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    [getAccessTokenSilently]
  );

  const deleteById = useCallback(
    async (auth0id: string): Promise<void> => {
      const token = await getAccessTokenSilently();

      await axios.delete(`${BASE_URL}/${auth0id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [getAccessTokenSilently]
  );

  const deleteAll = useCallback(async (): Promise<void> => {
    const token = await getAccessTokenSilently();

    await axios.delete(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, [getAccessTokenSilently]);

  return {
    getAll,
    getById,
    save,
    deleteById,
    deleteAll,
  };
};

export default useAdministrators;
