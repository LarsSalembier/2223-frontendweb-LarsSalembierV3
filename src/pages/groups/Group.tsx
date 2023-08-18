import { Card, Spinner } from '@nextui-org/react';
import { Group } from '../../typings/api/Group';
import { Person } from '../../typings/api/Person';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useGroups from '../../api/useGroups';
import ErrorBox from '../../components/ErrorBox';
import GroupHeader from './group/GroupHeader';
import GroupDetails from './group/GroupDetails';
import PersonList from './group/PersonList';

function Group() {
  const [group, setGroup] = useState(null as Group | null);
  const [leiding, setLeiding] = useState([] as Person[]);
  const [error, setError] = useState(null as Error | null);
  const [loading, setLoading] = useState(true);

  // get id param
  const { id } = useParams();

  const groupApi = useGroups();

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await groupApi.getById(parseInt(id as string));
        setGroup(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchGroup();
  }, []);

  useEffect(() => {
    if (group) {
      const fetchLeiding = async () => {
        try {
          setLoading(true);
          setError(null);
          const data = await groupApi.getMembers(group.id);
          setLeiding(data);
        } catch (error) {
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      };
      fetchLeiding();
    }
  }, [group]);

  return (
    <Card className="m-8 bg-gray-900 p-16">
      {error && <ErrorBox error={error} />}
      {loading && <Spinner />}
      {!error && !loading && <GroupHeader name={group?.name ?? ''} />}
      {!error && !loading && group && <GroupDetails {...group} />}
      {!error && !loading && <PersonList leiding={leiding} />}
    </Card>
  );
}

export default Group;
