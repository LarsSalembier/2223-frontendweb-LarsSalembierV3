import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { Group } from '../../../typings/api/Group';

type Props = {
  group: Group;
  onDelete: (id: number) => Promise<void>;
};

function GroupCard({ group, onDelete }: Props) {
  const navigate = useNavigate();

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
      <CardFooter className="flex flex-col space-y-4">
        {group.color ? <p className="text-lg">Kleur: {group.color}</p> : null}
        {group.target ? (
          <p className="text-lg">Doelgroep: {group.target}</p>
        ) : null}
        <Button size="lg" className="w-fit bg-red-700" onClick={handleDelete}>
          Verwijder afdeling
        </Button>
        <Button
          size="lg"
          className="w-fit bg-primary"
          onClick={() => navigate(`/afdelingen/create/${group.id}`)}
        >
          Bewerk afdeling
        </Button>
      </CardFooter>
    </Card>
  );
}

export default GroupCard;
