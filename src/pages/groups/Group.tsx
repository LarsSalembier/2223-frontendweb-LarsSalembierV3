import { Button, Card, Spinner } from '@nextui-org/react';
import { Group } from '../../typings/api/Group';
import { Person } from '../../typings/api/Person';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useGroups from '../../api/useGroups';
import ErrorBox from '../../components/ErrorBox';
import GroupHeader from './group/GroupHeader';
import GroupDetails from './group/GroupDetails';
import PersonList from './group/PersonList';
import usePeople from '../../api/usePeople';
import { useAuth0 } from '@auth0/auth0-react';
import RequireAuth from '../../components/auth/RequireAuth';

function Group() {
  const [group, setGroup] = useState(null as Group | null);
  const [leiding, setLeiding] = useState([] as Person[]);
  const [error, setError] = useState(null as Error | null);
  const [loading, setLoading] = useState(true);

  // get id param
  const { id } = useParams();

  const groupApi = useGroups();

  const peopleApi = usePeople();

  const navigate = useNavigate();

  const deleteGroupById = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await groupApi.deleteById(id);
      navigate('/afdelingen');
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

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

  const onAddPerson = () => {
    navigate(`/afdelingen/${id}/leiding/create`);
  };

  const onEditPerson = (personId: number) => {
    navigate(`/afdelingen/${id}/leiding/create/${personId}`);
  };

  const onDeletePerson = async (personId: number) => {
    try {
      setError(null);
      await groupApi.removeMember(group?.id ?? 0, personId);
      await peopleApi.deleteById(personId);
      setLeiding(leiding.filter((p) => p.id !== personId));
    } catch (error) {
      setError(error as Error);
    }
  };

  return (
    <Card className="m-8 bg-gray-900 p-16">
      {error && <ErrorBox error={error} />}
      {loading && <Spinner />}
      {!error && !loading && <GroupHeader name={group?.name ?? ''} />}
      {!error && !loading && group && <GroupDetails {...group} />}
      {!error && !loading && (
        <PersonList
          leiding={leiding}
          onAddPerson={onAddPerson}
          handleDelete={onDeletePerson}
          handleUpdate={onEditPerson}
        />
      )}

      <RequireAuth>
        <div className="flex flex-wrap gap-8">
          <Button
            size="lg"
            className="w-fit bg-red-700"
            onClick={() => {
              deleteGroupById(parseInt(id as string));
            }}
          >
            Verwijder afdeling
          </Button>
          <Button
            size="lg"
            className="w-fit bg-primary"
            onClick={() => navigate(`/afdelingen/create/${id}`)}
          >
            Bewerk afdeling
          </Button>
        </div>
      </RequireAuth>
    </Card>
  );
}

export default Group;
