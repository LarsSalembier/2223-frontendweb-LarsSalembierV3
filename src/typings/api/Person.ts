export type Person = {
  id: number;
  name: string;
  email?: string;
  phoneNumber?: string;
  bio?: string;
  studiesOrJob?: string;
};

export type StringifiedPerson = {
  id: string;
  name: string;
  email?: string;
  phoneNumber?: string;
  bio?: string;
  studiesOrJob?: string;
};

export function fromStringifiedPerson(person: StringifiedPerson): Person {
  return {
    ...person,
    id: parseInt(person.id),
  };
}
