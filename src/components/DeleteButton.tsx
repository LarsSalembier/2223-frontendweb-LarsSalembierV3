// DeleteButton.tsx
import { Button } from '@nextui-org/react';
import React from 'react';

type DeleteButtonProps = {
  onDelete: () => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <Button className="bg-red-500 text-white" onClick={onDelete}>
      Verwijder
    </Button>
  );
};

export default DeleteButton;
