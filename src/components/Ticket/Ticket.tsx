import { DraggableItemsEnum } from 'components/Column/types';
import { CrossIcon } from 'icons';
import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { ITicketProps } from './types';

export const Ticket: FC<ITicketProps> = ({
  title,
  description,
  id,
  columnType,
  orderNumber,
  onRemoveTicket,
}) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: DraggableItemsEnum.TICKET,
    item: { title, description, id, columnType, orderNumber },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className={`relative rounded-lg border border-light bg-white p-2 ${
        isDragging && 'opacity-50'
      }`}
      ref={dragRef}
    >
      <CrossIcon
        className={
          'absolute right-1 top-1.5 cursor-pointer text-black hover:text-red-500'
        }
        size={'18'}
        onClick={() => onRemoveTicket(id)}
      />
      <p className={'mb-1 text-sm font-medium text-ash'}>{title}</p>
      <p className={'text-xs text-gray'}>{description}</p>
    </div>
  );
};
