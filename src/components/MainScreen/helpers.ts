import { ColumnTypesEnum } from 'components/Column/types';

export const columns = [
  {
    name: ColumnTypesEnum.Idea,
    type: ColumnTypesEnum.Idea,
    isCreatable: true,
  },
  {
    name: ColumnTypesEnum.Todo,
    type: ColumnTypesEnum.Todo,
  },
  {
    name: ColumnTypesEnum.InProgress,
    type: ColumnTypesEnum.InProgress,
  },
  {
    name: ColumnTypesEnum.Published,
    type: ColumnTypesEnum.Published,
  },
];
