import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Spinner,
} from '@nextui-org/react';
import useGroups from '../../api/useGroups';
import { useEffect, useState } from 'react';
import { Group } from '../../typings/api/Group';
import { useNavigate } from 'react-router-dom';
import ErrorBox from '../../components/ErrorBox';

function GroupList() {
  const navigate = useNavigate();

  const [groups, setGroups] = useState([] as Group[]);
  const [error, setError] = useState(null as Error | null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await groupApi.getAll();
        setGroups(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchGroups();
  }, []);

  const groupApi = useGroups();

  return (
    <div>
      <Card className="m-8 bg-gray-900 p-16">
        <CardHeader className="mb-8 flex justify-center">
          <h1 className="text-4xl font-semibold">Afdelingen</h1>
        </CardHeader>
        <CardBody>
          {error && <ErrorBox error={error} />}
          {loading && <Spinner size="lg" />}
          {!error && !loading && (
            <div className="flex w-fit flex-wrap justify-center gap-16">
              {groups.map((group) => (
                <Card
                  isPressable
                  key={group.id}
                  onClick={() =>
                    navigate(`/afdelingen/${group.id}`, { replace: true })
                  }
                  className={`${group.color} w-full bg-background p-4 sm:w-2/5`}
                >
                  <CardHeader>
                    <h1 className="text-4xl font-semibold">{group.name}</h1>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <p>{group.description}</p>
                  </CardBody>
                  <CardFooter>
                    <p className="text-lg">Kleur: {group.color}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default GroupList;
