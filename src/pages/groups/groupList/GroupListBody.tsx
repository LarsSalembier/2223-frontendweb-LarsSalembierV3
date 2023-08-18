import { CardBody, Spinner } from '@nextui-org/react';
import GroupCard from './GroupCard';
import ErrorBox from '../../../components/ErrorBox';
import Group from '../Group';

type Props = {
  groups: Group[];
  error: any;
  loading: boolean;
  onDelete: (id: number) => Promise<void>;
};

function GroupListBody({ groups, error, loading, onDelete }: Props) {
  if (error) return <ErrorBox error={error} />;
  if (loading) return <Spinner size="lg" />;

  return (
    <>
      <CardBody>
        <div className="flex w-fit flex-wrap justify-center gap-16">
          {groups.map((group) => (
            <GroupCard group={group} key={group.id} onDelete={onDelete} />
          ))}
        </div>
      </CardBody>
    </>
  );
}

export default GroupListBody;
