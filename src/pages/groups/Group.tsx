import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Spinner,
} from '@nextui-org/react';
import { Group } from '../../typings/api/Group';
import { Person } from '../../typings/api/Person';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useGroups from '../../api/useGroups';
import ErrorBox from '../../components/ErrorBox';

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
      <CardHeader className="mb-8 flex justify-center">
        <h1 className="text-6xl font-semibold">{group?.name}</h1>
      </CardHeader>
      {error && <ErrorBox error={error} />}
      {loading && <Spinner />}
      {!error && !loading && (
        <CardBody>
          <div className="flex w-full flex-col gap-8 p-4 px-16">
            <p>{group?.description}</p>
            <p>Afdelingskleur: {group?.color}</p>
            <p>Doelgroep: {group?.target}</p>
          </div>
        </CardBody>
      )}
      {!error && !loading && (
        <CardFooter>
          <div className="flex w-full flex-col gap-8 p-4 px-16">
            <h1 className="text-4xl font-semibold">Leiding</h1>
            <div className="flex w-full flex-wrap gap-8">
              {leiding.map((person) => (
                <Card
                  key={person.id}
                  className="w-full bg-background p-4 sm:w-2/5"
                >
                  <CardHeader>
                    <h1 className="text-4xl font-semibold">{person.name}</h1>
                  </CardHeader>
                  <CardBody>
                    <p>{person.bio}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

export default Group;
