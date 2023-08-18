import { CardHeader } from '@nextui-org/react';

type Props = {
  name: string;
};

function GroupHeader({ name }: Props) {
  return (
    <CardHeader className="mb-8 flex justify-center">
      <h1 className="text-6xl font-semibold">{name}</h1>
    </CardHeader>
  );
}

export default GroupHeader;
