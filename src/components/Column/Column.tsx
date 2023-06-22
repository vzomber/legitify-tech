import { Ticket } from 'components/Ticket';
import { ITicket } from 'components/Ticket/types';
import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { IColumn } from './types';

export const Column: FC<IColumn> = ({
  name,
  columnType,
  tickets,
  onTicketDrop,
}) => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'TICKET',
    drop: (item: ITicket) => {
      console.log(item);
      onTicketDrop(item.id, columnType);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={dropRef}
      className={
        'mx-2 flex h-full w-64 flex-col overflow-hidden rounded border border-primary p-2 py-4'
      }
    >
      <p className={'pb-2 font-semibold'}>{name}</p>
      <div className={'grid grid-cols-1 gap-3 overflow-scroll'}>
        {tickets
          .filter((ticket) => ticket.columnType === columnType)
          .sort((a, b) => a.orderNumber - b.orderNumber)
          .map((ticket) => (
            <Ticket key={ticket.id} {...ticket} />
          ))}
      </div>
    </div>
  );
};
