import { Ticket } from 'components/Ticket';
import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { IColumn } from './types';

export const Column: FC<IColumn> = ({ name, tickets }) => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'TICKET',
    drop: (props) => console.log(props),
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
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} {...ticket} />
        ))}
      </div>
    </div>
  );
};
