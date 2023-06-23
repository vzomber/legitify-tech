import { ITicket } from 'components/Ticket/types';

export enum ColumnTypesEnum {
  Idea = 'Idea',
  Todo = 'Todo',
  InProgress = 'In Progress',
  Published = 'Published',
}
export interface IColumn {
  name: string;
  tickets: ITicket[];
  columnType: ColumnTypesEnum;
  onTicketDrop: (ticketId: string, columnType: ColumnTypesEnum) => void;
  onAddNewTicket: (
    title: string,
    description: string,
    columnType: ColumnTypesEnum
  ) => void;
  isCreatable?: boolean;
}
