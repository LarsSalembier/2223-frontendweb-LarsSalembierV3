import axios from 'axios';
import { Group } from '../typings/api/Group';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';
import { Person } from '../typings/api/Person';

const API_URL: string | undefined = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error('Missing VITE_API_URL environment variable');
}

const BASE_URL = `${API_URL}/groups`;

const useGroups = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getAll = useCallback(async (): Promise<Group[]> => {
    const token = await getAccessTokenSilently();

    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }, [getAccessTokenSilently]);

  const getById = useCallback(
    async (id: number): Promise<Group> => {
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

  const getMembers = useCallback(
    async (id: number): Promise<Person[]> => {
      const token = await getAccessTokenSilently();

      const response = await axios.get(`${BASE_URL}/${id}/members`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
    [getAccessTokenSilently]
  );

  const save = useCallback(
    async (data: Partial<Group>): Promise<Group> => {
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

  const addMember = useCallback(
    async (id: number, memberId: number): Promise<void> => {
      const token = await getAccessTokenSilently();

      await axios.post(`${BASE_URL}/${id}/members/${memberId}`, {
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

  const removeMember = useCallback(
    async (id: number, memberId: number): Promise<void> => {
      const token = await getAccessTokenSilently();

      await axios.delete(`${BASE_URL}/${id}/members/${memberId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [getAccessTokenSilently]
  );

  const removeAllMembers = useCallback(
    async (id: number): Promise<void> => {
      const token = await getAccessTokenSilently();

      await axios.delete(`${BASE_URL}/${id}/members`, {
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
    getMembers,
    save,
    addMember,
    deleteById,
    deleteAll,
    removeMember,
    removeAllMembers,
  };
};

export default useGroups;
