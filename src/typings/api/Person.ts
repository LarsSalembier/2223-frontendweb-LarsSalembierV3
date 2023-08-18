export type Person = {
  id: number;
  name: string;
  email?: string;
  phoneNumber?: string;
  bio?: string;
  studiesOrJob?: string;
  birthdate?: Date;
};

export type StringifiedPerson = {
  id: string;
  name: string;
  email?: string;
  phoneNumber?: string;
  bio?: string;
  studiesOrJob?: string;
  birthdate?: string;
};

export function fromStringifiedPerson(person: StringifiedPerson): Person {
  return {
    ...person,
    id: parseInt(person.id),
    birthdate: person.birthdate ? new Date(person.birthdate) : undefined,
  };
}
