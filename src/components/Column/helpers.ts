import { ITicket } from 'components/Ticket/types';
import { ColumnTypesEnum } from './types';

export const mockTickets1: ITicket[] = [
  {
    id: '1',
    title: 'Create design',
    description: 'We need first version design for our website',
    columnType: ColumnTypesEnum.Idea,
    orderNumber: 0,
  },
  {
    id: '2',
    title: 'Brainstorm new ideas',
    description: 'This one is self explanatory',
    columnType: ColumnTypesEnum.Idea,
    orderNumber: 0,
  },
  {
    id: '3',
    title: 'Make notes for James',
    description:
      'Wrote down all the missing information for James to start working on the project',
    columnType: ColumnTypesEnum.Idea,
    orderNumber: 0,
  },
  {
    id: '4',
    title: 'Help Joana',
    description: 'Joana needs help with her project',
    columnType: ColumnTypesEnum.Idea,
    orderNumber: 0,
  },
  {
    id: '5',
    title: 'Buy new laptop',
    description: 'My laptop is too old, need to buy a new one',
    columnType: ColumnTypesEnum.Idea,
    orderNumber: 0,
  },
  {
    id: '6',
    title: 'Open new office',
    description: 'We need to expand our business',
    columnType: ColumnTypesEnum.Idea,
    orderNumber: 0,
  },
  {
    id: '7',
    title: 'Create new website',
    description: 'We need to create new website for our company',
    columnType: ColumnTypesEnum.Todo,
    orderNumber: 0,
  },
  {
    id: '8',
    title: 'Create new logo',
    description: 'We need new logo for our company',
    columnType: ColumnTypesEnum.Todo,
    orderNumber: 0,
  },
  {
    id: '9',
    title: 'Submit new application to AppStore',
    description: 'We need to submit new application to AppStore',
    columnType: ColumnTypesEnum.Published,
    orderNumber: 0,
  },
  {
    id: '10',
    title: 'Submit new application to Google Play',
    description: 'We need to submit new application to Google Play',
    columnType: ColumnTypesEnum.Published,
    orderNumber: 0,
  },
  {
    id: '11',
    title: 'Hire new developer',
    description: 'We need to hire new developer',
    columnType: ColumnTypesEnum.Published,
    orderNumber: 0,
  },
  {
    id: '12',
    title: 'Hire new designer',
    description: 'We need to hire new designer',
    columnType: ColumnTypesEnum.InProgress,
    orderNumber: 0,
  },
  {
    id: '13',
    title: 'Hire new manager',
    description:
      'We need to hire new manager to manage our new office in London',
    columnType: ColumnTypesEnum.InProgress,
    orderNumber: 0,
  },
];
