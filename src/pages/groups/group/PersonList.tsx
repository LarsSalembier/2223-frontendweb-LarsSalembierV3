import { Button, CardFooter } from '@nextui-org/react';
import { Person } from '../../../typings/api/Person';
import PersonCard from './PersonCard';

type Props = {
  leiding: Person[];
  onAddPerson: () => void;
  handleDelete: (id: number) => void;
  handleUpdate: (id: number) => void;
};

function PersonList({
  leiding,
  onAddPerson,
  handleDelete,
  handleUpdate,
}: Props) {
  return (
    <CardFooter>
      <div className="flex w-full flex-col gap-8 p-4 px-16">
        <div className="flex flex-wrap gap-4">
          <h1 className="text-4xl font-semibold">Leiding</h1>
          <Button className="w-fit bg-primary" size="lg" onClick={onAddPerson}>
            Voeg leiding toe
          </Button>
        </div>

        <div className="flex w-full flex-wrap gap-8">
          {leiding.map((person) => (
            <PersonCard
              person={person}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          ))}
        </div>
      </div>
    </CardFooter>
  );
}

export default PersonList;
