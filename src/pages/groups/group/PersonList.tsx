import { CardFooter } from '@nextui-org/react';
import { Person } from '../../../typings/api/Person';
import PersonCard from './PersonCard';

type Props = {
  leiding: Person[];
};

function PersonList({ leiding }: Props) {
  return (
    <CardFooter>
      <div className="flex w-full flex-col gap-8 p-4 px-16">
        <h1 className="text-4xl font-semibold">Leiding</h1>
        <div className="flex w-full flex-wrap gap-8">
          {leiding.map((person) => (
            <PersonCard person={person} />
          ))}
        </div>
      </div>
    </CardFooter>
  );
}

export default PersonList;
