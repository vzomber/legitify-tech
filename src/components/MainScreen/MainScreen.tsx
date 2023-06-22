import { Column } from 'components/Column';
import { mockTickets1 } from 'components/Column/helpers';
import { ColumnTypes } from 'components/Column/types';
import { useState } from 'react';

export const MainScreen = () => {
  const [tickets, setTickets] = useState(mockTickets1);
  const columnsKeys = Object.keys(ColumnTypes) as Array<
    keyof typeof ColumnTypes
  >;

  const changeTicketColumn = (id: string, columnType: ColumnTypes) => {
    setTickets((prevTickets) => {
      const numberOfTicketsInColumn =
        prevTickets.filter((ticket) => ticket.columnType === columnType)
          .length || 0;

      return prevTickets.map((ticket) =>
        ticket.id === id
          ? { ...ticket, orderNumber: numberOfTicketsInColumn, columnType }
          : ticket
      );
    });
  };

  return (
    <div className={'flex h-screen w-screen items-center justify-center py-36'}>
      {columnsKeys.map((columnKey) => (
        <Column
          key={columnKey}
          columnType={ColumnTypes[columnKey]}
          name={ColumnTypes[columnKey]}
          tickets={tickets}
          onTicketDrop={changeTicketColumn}
        />
      ))}
    </div>
  );
};
