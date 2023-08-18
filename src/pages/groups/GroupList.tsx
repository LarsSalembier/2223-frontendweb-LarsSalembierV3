import { Card } from '@nextui-org/react';
import useGroups from '../../api/useGroups';
import { useEffect, useState } from 'react';
import Group from './Group';
import GroupListHeader from './groupList/GroupListHeader';
import GroupListBody from './groupList/GroupListBody';

function GroupList() {
  const [groups, setGroups] = useState([] as Group[]);
  const [error, setError] = useState(null as Error | null);
  const [loading, setLoading] = useState(true);
  const groupApi = useGroups();

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await groupApi.getAll();
        setGroups(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchGroups();
    console.log('fetching group');
  }, []);

  const deleteGroupById = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await groupApi.deleteById(id);
      setGroups((prevGroups) => prevGroups.filter((group) => group.id !== id));
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card className="m-8 bg-gray-900 p-16">
        <GroupListHeader />
        <GroupListBody
          groups={groups}
          error={error}
          loading={loading}
          onDelete={deleteGroupById}
        />
      </Card>
    </div>
  );
}

export default GroupList;
