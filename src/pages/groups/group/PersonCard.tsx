import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
} from '@nextui-org/react';
import { Person } from '../../../typings/api/Person';
import RequireAuth from '../../../components/auth/RequireAuth';

type Props = {
  person: Person;
  handleDelete: (id: number) => void;
  handleUpdate: (id: number) => void;
};

function PersonCard({ person, handleDelete, handleUpdate }: Props) {
  return (
    <Card key={person.id} className="w-full bg-background p-4 sm:w-2/5">
      <CardHeader>
        <h1 className="text-2xl font-semibold">{person.name}</h1>
      </CardHeader>
      <CardBody className="flex flex-col gap-8">
        <p>{person.bio}</p>
        <p>Email: {person.email}</p>
        <p>Telefoonnummer: {person.phoneNumber}</p>
        <p>Studies of job: {person.studiesOrJob}</p>
      </CardBody>
      <RequireAuth>
        <CardFooter className="flex flex-col space-y-4">
          <Button
            size="lg"
            className="w-fit bg-red-700"
            onClick={() => handleDelete(person.id)}
          >
            Verwijder leiding
          </Button>
          <Button
            size="lg"
            className="w-fit bg-primary"
            onClick={() => handleUpdate(person.id)}
          >
            Bewerk leiding
          </Button>
        </CardFooter>
      </RequireAuth>
    </Card>
  );
}

export default PersonCard;
