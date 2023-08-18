export type Group = {
  id: number;
  name: string;
  description: string;
  color?: string;
  target?: string;
};

export type StringifiedGroup = {
  id: string;
  name: string;
  description: string;
  color?: string;
  target?: string;
};

export function fromStringifiedGroup(group: StringifiedGroup): Group {
  return {
    ...group,
    id: parseInt(group.id),
  };
}
