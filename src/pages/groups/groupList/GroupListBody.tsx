import { Button, CardBody, Spinner } from '@nextui-org/react';
import GroupCard from './GroupCard';
import ErrorBox from '../../../components/ErrorBox';
import Group from '../Group';
import { useNavigate } from 'react-router';

type Props = {
  groups: Group[];
  error: any;
  loading: boolean;
  onDelete: (id: number) => Promise<void>;
};

function GroupListBody({ groups, error, loading, onDelete }: Props) {
  const navigate = useNavigate();

  if (error) return <ErrorBox error={error} />;
  if (loading) return <Spinner size="lg" />;

  return (
    <>
      <CardBody>
        <div className="flex w-fit flex-wrap justify-center gap-16">
          {groups.map((group) => (
            <GroupCard group={group} key={group.id} onDelete={onDelete} />
          ))}
          <Button
            color="primary"
            size="lg"
            onClick={() => navigate('/afdelingen/create')}
          >
            Voeg een afdeling toe
          </Button>
        </div>
      </CardBody>
    </>
  );
}

export default GroupListBody;
