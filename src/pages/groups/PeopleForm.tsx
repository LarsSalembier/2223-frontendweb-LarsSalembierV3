import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
} from '@nextui-org/react';
import { FieldValues, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ErrorBox from '../../components/ErrorBox';
import usePeople from '../../api/usePeople';

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
  email: {
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: 'Geen geldig e-mailadres',
    },
    maxLength: {
      value: 100,
      message: 'E-mailadres mag maximaal 100 karakters lang zijn',
    },
  },
  phoneNumber: {
    maxLength: {
      value: 30,
      message: 'Telefoonnummer mag maximaal 30 karakters lang zijn',
    },
  },
  bio: {
    maxLength: {
      value: 500,
      message: 'Bio mag maximaal 500 karakters lang zijn',
    },
  },
  studiesOrJob: {
    maxLength: {
      value: 100,
      message: 'Studies of job mag maximaal 100 karakters lang zijn',
    },
  },
};

function PeopleForm() {
  const [error, setError] = useState<Error | null>(null);
  const {
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const { personId, id } = useParams();
  const peopleApi = usePeople();

  const onSubmit = async (data: FieldValues) => {
    const { name, email, phoneNumber, bio, studiesOrJob } = data;
    try {
      setError(null);
      await peopleApi.save(
        {
          id: personId ? parseInt(personId) : undefined,
          name,
          email,
          phoneNumber,
          bio,
          studiesOrJob,
        },
        parseInt(id as string)
      );
      navigate(`/afdelingen/${id}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        setError(error);
      }
    }
  };

  useEffect(() => {
    if (!personId) {
      reset();
      return;
    }

    const fetchGroup = async () => {
      try {
        setError(null);
        const person = await peopleApi.getById(parseInt(personId));
        setValue('name', person.name);
        setValue('email', person.email);
        setValue('phoneNumber', person.phoneNumber);
        setValue('bio', person.bio);
        setValue('studiesOrJob', person.studiesOrJob);
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
        <h1 className="text-xl">
          Afdeling {personId ? 'bewerken' : 'toevoegen'}
        </h1>
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
            placeholder="Voornaam en naam"
            validationState={errors.name ? 'invalid' : 'valid'}
            errorMessage={errors.name ? errors.name.message?.toString() : ''}
          />

          <Input
            {...register('email', validationRules.email)}
            id="email"
            type="email"
            label="E-mailadres"
            className="form-control"
            variant="bordered"
            placeholder="E-mailadres"
            validationState={errors.email ? 'invalid' : 'valid'}
            errorMessage={errors.email ? errors.email.message?.toString() : ''}
          />

          <Input
            {...register('phoneNumber', validationRules.phoneNumber)}
            id="phoneNumber"
            type="text"
            label="Telefoonnummer"
            className="form-control"
            variant="bordered"
            placeholder="Telefoonnummer"
            validationState={errors.phoneNumber ? 'invalid' : 'valid'}
            errorMessage={
              errors.phoneNumber ? errors.phoneNumber.message?.toString() : ''
            }
          />

          <Textarea
            {...register('bio', validationRules.bio)}
            id="bio"
            label="Bio"
            className="form-control"
            variant="bordered"
            placeholder="Bio"
            validationState={errors.bio ? 'invalid' : 'valid'}
            errorMessage={errors.bio ? errors.bio.message?.toString() : ''}
          />

          <Input
            {...register('studiesOrJob', validationRules.studiesOrJob)}
            id="studiesOrJob"
            type="text"
            label="Studies of job"
            className="form-control"
            variant="bordered"
            placeholder="Studies of job"
            validationState={errors.studiesOrJob ? 'invalid' : 'valid'}
            errorMessage={
              errors.studiesOrJob ? errors.studiesOrJob.message?.toString() : ''
            }
          />
          <Button type="submit" disabled={isSubmitting}>
            Afdeling {id ? 'bewerken' : 'toevoegen'}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}

export default PeopleForm;
