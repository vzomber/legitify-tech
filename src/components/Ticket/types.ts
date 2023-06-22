import { ColumnTypes } from 'components/Column/types';

export interface ITicket {
  id: string;
  title: string;
  description: string;
  columnType: ColumnTypes;
  orderNumber: number;
}
