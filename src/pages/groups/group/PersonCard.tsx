import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { Person } from '../../../typings/api/Person';

type Props = {
  person: Person;
};

function PersonCard({ person }: Props) {
  return (
    <Card key={person.id} className="w-full bg-background p-4 sm:w-2/5">
      <CardHeader>
        <h1 className="text-4xl font-semibold">{person.name}</h1>
      </CardHeader>
      <CardBody>
        <p>{person.bio}</p>
      </CardBody>
    </Card>
  );
}

export default PersonCard;
