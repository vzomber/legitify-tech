import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { ITicket } from './types';

export const Ticket: FC<ITicket> = ({
  title,
  description,
  id,
  columnType,
  orderNumber,
}) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'TICKET',
    item: { title, description, id, columnType, orderNumber },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className={'rounded border border-primary p-2'} ref={dragRef}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};
