import axios from 'axios';
import { Person } from '../typings/api/Person';
import { Group } from '../typings/api/Group';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

const API_URL: string | undefined = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error('Missing VITE_API_URL environment variable');
}

const BASE_URL = `${API_URL}/people`;

const usePeople = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAll = useCallback(async (): Promise<Person[]> => {
    const token = await getAccessTokenSilently();

    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }, [getAccessTokenSilently]);

  const getById = useCallback(
    async (id: number): Promise<Person> => {
      const token = await getAccessTokenSilently();

      const response = await axios.get(`${BASE_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    [getAccessTokenSilently]
  );

  const getGroups = useCallback(
    async (id: number): Promise<Group[]> => {
      const token = await getAccessTokenSilently();

      const response = await axios.get(`${BASE_URL}/${id}/groups`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    [getAccessTokenSilently]
  );

  const save = useCallback(
    async (data: Partial<Person>): Promise<Person> => {
      const token = await getAccessTokenSilently();

      const { id, ...values } = data;

      const response = await axios({
        method: id ? 'put' : 'post',
        url: id ? `${BASE_URL}/${id}` : BASE_URL,
        data: values,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    [getAccessTokenSilently]
  );

  const joinGroup = useCallback(
    async (id: number, groupId: string): Promise<void> => {
      const token = await getAccessTokenSilently();

      await axios.post(`${BASE_URL}/${id}/groups/${groupId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [getAccessTokenSilently]
  );

  const deleteById = useCallback(
    async (id: number): Promise<void> => {
      const token = await getAccessTokenSilently();

      await axios.delete(`${BASE_URL}/${id}`, {
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

  const leaveGroup = useCallback(
    async (id: number, groupId: string): Promise<void> => {
      const token = await getAccessTokenSilently();

      await axios.delete(`${BASE_URL}/${id}/groups/${groupId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [getAccessTokenSilently]
  );

  const leaveAllGroups = useCallback(
    async (id: number): Promise<void> => {
      const token = await getAccessTokenSilently();

      await axios.delete(`${BASE_URL}/${id}/groups`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [getAccessTokenSilently]
  );

  return {
    getAll,
    getById,
    getGroups,
    save,
    joinGroup,
    deleteById,
    deleteAll,
    leaveGroup,
    leaveAllGroups,
  };
};

export default usePeople;
