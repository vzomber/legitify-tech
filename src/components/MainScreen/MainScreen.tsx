import { Column } from 'components/Column';
import { mockTickets1 } from 'components/Column/helpers';
import { ColumnTypesEnum } from 'components/Column/types';
import { useState } from 'react';
import { columns } from './helpers';

export const MainScreen = () => {
  const [tickets, setTickets] = useState(mockTickets1);

  const changeTicketColumn = (id: string, columnType: ColumnTypesEnum) => {
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

  const removeTicket = (id: string) => {
    setTickets((prevTickets) =>
      prevTickets.filter((ticket) => ticket.id !== id)
    );
  };

  const addNewTicket = (
    title: string,
    description: string,
    columnType: ColumnTypesEnum
  ) => {
    setTickets((prevTickets) => {
      const numberOfTicketsInColumn =
        prevTickets.filter((ticket) => ticket.columnType === columnType)
          .length || 0;

      return [
        ...prevTickets,
        {
          id: Math.round(Math.random() * 1000).toString(),
          title,
          description,
          columnType,
          orderNumber: numberOfTicketsInColumn,
        },
      ];
    });
  };

  return (
    <div
      className={
        'flex h-screen w-screen items-center justify-center bg-primary py-36'
      }
    >
      {columns.map(({ name, type, isCreatable }) => (
        <Column
          key={name}
          columnType={type}
          name={name}
          isCreatable={isCreatable}
          tickets={tickets}
          onTicketDrop={changeTicketColumn}
          onAddNewTicket={addNewTicket}
          onRemoveTicket={removeTicket}
        />
      ))}
    </div>
  );
};
