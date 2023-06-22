import { ITicket } from 'components/Ticket/types';

export enum ColumnTypes {
  Idea = 'Idea',
  Todo = 'Todo',
  InProgress = 'In Progress',
  Published = 'Published',
}
export interface IColumn {
  name: string;
  tickets: ITicket[];
  columnType: ColumnTypes;
  onTicketDrop: (ticketId: string, columnType: ColumnTypes) => void;
}
