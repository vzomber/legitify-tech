import { ITicket } from 'components/Ticket/types';

export interface IColumn {
  name: string;
  tickets: ITicket[];
}
