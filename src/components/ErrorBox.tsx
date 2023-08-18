import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';

type ErrorProps = {
  error: Error;
};

export default function ErrorBox({ error }: ErrorProps) {
  if (error) {
    return (
      <Card className="bg-danger">
        <CardHeader>
          <h4 className="text-xl">An error occured</h4>
        </CardHeader>
        <Divider />
        <CardBody>{error.message || JSON.stringify(error)}</CardBody>
      </Card>
    );
  }

  return null;
}
