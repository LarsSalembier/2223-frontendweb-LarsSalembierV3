import { CardBody } from '@nextui-org/react';

type Props = {
  description: string;
  color?: string;
  target?: string;
};

function GroupDetails({ description, color, target }: Props) {
  return (
    <CardBody>
      <div className="flex w-full flex-col gap-8 p-4 px-16">
        <p>{description}</p>
        {color ? <p>Afdelingskleur: {color}</p> : null}
        {target ? <p>Doelgroep: {target}</p> : null}
      </div>
    </CardBody>
  );
}

export default GroupDetails;
