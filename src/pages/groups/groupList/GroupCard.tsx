import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Spinner,
} from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { Group } from '../../../typings/api/Group';
import React from 'react';
import DeleteButton from '../../../components/DeleteButton';
import ErrorBox from '../../../components/ErrorBox';

type Props = {
  group: Group;
  onDelete: (id: number) => Promise<void>;
};

function GroupCard({ group, onDelete }: Props) {
  const navigate = useNavigate();

  const [error, setError] = React.useState(null as Error | null);
  const [loading, setLoading] = React.useState(false);

  const handleDelete = async () => {
    await onDelete(group.id);
  };

  return (
    <Card
      isPressable
      onClick={() => navigate(`/afdelingen/${group.id}`, { replace: true })}
      className={`${group.color} w-full bg-background p-4 sm:w-2/5`}
    >
      <CardHeader>
        <h1 className="text-4xl font-semibold">{group.name}</h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{group.description}</p>
      </CardBody>
      <CardFooter className="flex flex-col space-y-2">
        {group.color ? <p className="text-lg">Kleur: {group.color}</p> : null}
        {group.target ? (
          <p className="text-lg">Doelgroep: {group.target}</p>
        ) : null}
        <DeleteButton onDelete={handleDelete} />
        {error ? <ErrorBox error={error} /> : null}
        {loading ? <Spinner /> : null}
      </CardFooter>
    </Card>
  );
}

export default GroupCard;
