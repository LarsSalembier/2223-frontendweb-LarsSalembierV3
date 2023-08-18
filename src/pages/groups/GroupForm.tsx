import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
} from '@nextui-org/react';
import useGroups from '../../api/useGroups';
import { FieldValues, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ErrorBox from '../../components/ErrorBox';

const validationRules = {
  name: {
    required: 'Naam is verplicht',
    minLength: {
      value: 3,
      message: 'Naam moet minstens 3 karakters lang zijn',
    },
    maxLength: {
      value: 100,
      message: 'Naam mag maximaal 100 karakters lang zijn',
    },
  },
  description: {
    required: 'Beschrijving is verplicht',
    minLength: {
      value: 3,
      message: 'Beschrijving moet minstens 3 karakters lang zijn',
    },
    maxLength: {
      value: 500,
      message: 'Beschrijving mag maximaal 500 karakters lang zijn',
    },
  },
  color: {
    maxLength: {
      value: 30,
      message: 'Kleur mag maximaal 30 karakters lang zijn',
    },
  },
  target: {
    maxLength: {
      value: 100,
      message: 'Doelgroep mag maximaal 30 karakters lang zijn',
    },
  },
};

function GroupForm() {
  const [error, setError] = useState<Error | null>(null);
  const {
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const groupApi = useGroups();

  const onSubmit = async (data: FieldValues) => {
    const { name, description, color, target } = data;
    try {
      setError(null);
      await groupApi.save({
        id: id ? parseInt(id) : undefined,
        name,
        description,
        color,
        target,
      });
      navigate('/afdelingen');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        setError(error);
      }
    }
  };

  useEffect(() => {
    if (!id) {
      reset();
      return;
    }

    const fetchGroup = async () => {
      try {
        setError(null);
        const group = await groupApi.getById(parseInt(id));
        setValue('name', group.name);
        setValue('description', group.description);
        setValue('color', group.color);
        setValue('target', group.target);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      }
    };

    fetchGroup();
  }, [id, setValue, reset]);

  return (
    <Card className="m-16 bg-gray-900 p-8">
      <CardHeader>
        <h1 className="text-xl">Afdeling {id ? 'bewerken' : 'toevoegen'}</h1>
      </CardHeader>
      {error ? <ErrorBox error={error} /> : null}
      <CardBody>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('name', validationRules.name)}
            id="name"
            type="text"
            label="Naam"
            className="form-control"
            required
            isRequired
            variant="bordered"
            placeholder="Naam van de afdeling"
          />
          {errors.user && <p>{errors.user.toString()}</p>}

          <Textarea
            {...register('description', validationRules.description)}
            id="description"
            type="text"
            label="Beschrijving"
            className="form-control"
            required
            isRequired
            variant="bordered"
            placeholder="Beschrijving van de afdeling"
          />

          <Input
            {...register('color', validationRules.color)}
            id="color"
            type="text"
            label="Kleur"
            className="form-control"
            variant="bordered"
            placeholder="Kleur van de afdeling"
          />

          <Input
            {...register('target', validationRules.target)}
            id="target"
            type="text"
            label="Doelgroep"
            className="form-control"
            variant="bordered"
            placeholder="Doelgroep van de afdeling"
          />
          <Button type="submit" disabled={isSubmitting}>
            Afdeling {id ? 'bewerken' : 'toevoegen'}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}

export default GroupForm;
