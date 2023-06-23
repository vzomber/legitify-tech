import { ColumnTypesEnum } from 'components/Column/types';

export interface ITicket {
  id: string;
  title: string;
  description: string;
  columnType: ColumnTypesEnum;
  orderNumber: number;
}

export interface ITicketProps extends ITicket {
  onRemoveTicket: (ticketId: string) => void;
}
